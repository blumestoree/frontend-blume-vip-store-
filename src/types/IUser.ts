export interface IUser {
	id: string;
	name: string;
	email: string;
	token: string;
	userOnServer: {
		id: string;
		nickname: string;
		gameUserId: string;
		server: {
			id: string;
			name: string;
			image: string;
		};
	}[];
	refreshToken: {
		id: string;
		expiresIn: number;
	};
}
export interface IUserApi {
	id: string;
	name: string;
	email: string;
	token: string;
	userOnServer: {
		id: string;
		nickname: string;
		gameUserId: string;
		server: {
			id: string;
			name: string;
			image: string;
		};
	}[];
	refreshToken: {
		id: string;
		expiresIn: number;
	};
}
