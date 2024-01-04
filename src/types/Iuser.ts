export interface Iuser {
  data: {
    name: string;
    token: string;
    id: string;
    refreshToken: {
      id: string;
    };
  };
}
