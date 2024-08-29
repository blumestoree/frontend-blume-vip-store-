import type { IServer, IServerApi } from "../types/IServer";

export function serverMapper(item: IServerApi): IServer {
	return {
		id: item?.id,
		name: item?.name,
		slug: item?.slug,
		image: item?.image,
		banner: item?.banner,
		serverOwnerId: item?.serverOwnerId,
		products: item?.products,
		categories: item?.categories,
	};
}
