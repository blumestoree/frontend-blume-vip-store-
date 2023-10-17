import axios from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

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
  try {
    const response = await api.post('/refreshToken', {
      refreshToken: parseCookies().blume_refresh_token,
    });

    const newAccessToken = response.data.token;
    setCookie(null, 'blume_token', newAccessToken);

    return newAccessToken;
  } catch (error) {
    destroyCookie(null, 'blume_token');
    destroyCookie(null, 'refresh_token');
    throw error;
  }
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        await refreshAccessToken();
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
