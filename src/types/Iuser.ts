export interface Iuser {
  data: {
    name: string;
    token: string;
    id: string;
    gameUserId: string;
    refreshToken: {
      id: string;
    };
  };
}
