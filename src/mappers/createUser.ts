import type { Iuser, IuserApi } from "../types/Iuser";

export function createUserMapper(item: IuserApi): Iuser {
	return {
		id: item?.id,
		name: item?.name,
		email: item?.email,
		token: item?.token,
		userOnServer: item?.userOnServer?.map((item) => ({
			id: item?.id,
			nickname: item?.nickname,
			gameUserId: item?.gameUserId,
			server: {
				id: item?.server?.id,
				name: item?.server?.name,
				image: item?.server?.image,
			},
		})),
		refreshToken: {
			id: item?.refreshToken?.id,
			expiresIn: item?.refreshToken?.expiresIn,
		},
	};
}
