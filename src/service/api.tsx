import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

let isRefreshing = false;

type FailedRequestQueue = {
  onSuccess: (newToken: string) => void;
  onFailure: () => void;
};

let failedRequestsQueue: FailedRequestQueue[] = [];

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
});

api.interceptors.request.use(async (config) => {
  const token = parseCookies().blume_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

async function refreshAccessToken() {
  if (!parseCookies()?.blume_user_id) {
    window.location.href = '/login';
  }
  try {
    const response = await api.post('/refreshToken', {
      refreshToken: parseCookies().blume_refresh_token,
    });

    const newAccessToken = response.data.token;

    const userDataString = parseCookies().blume_user_data;
    const userData = JSON.parse(userDataString);

    userData.token = newAccessToken;

    setCookie(null, 'blume_user_data', JSON.stringify(userData));

    return newAccessToken;
  } catch (error) {
    destroyCookie(null, 'blume_user_data');
  }
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error?.response?.status === 401) {
      const originalRequest = error.config;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      const retryOriginalRequest = new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: (newToken: string) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(api(originalRequest));
          },
          onFailure: () => {
            reject(error);
          },
        });
      });

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newAccessToken = await refreshAccessToken();
          failedRequestsQueue.forEach((request) => {
            request.onSuccess(newAccessToken);
          });
        } catch (refreshError) {
          failedRequestsQueue.forEach((request) => {
            request.onFailure();
          });
        } finally {
          isRefreshing = false;
          failedRequestsQueue = [];
        }
      }
      return retryOriginalRequest;
    }

    return Promise.reject(error);
  }
);
