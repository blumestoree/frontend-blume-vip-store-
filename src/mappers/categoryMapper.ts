import type { ICategory, ICategoryApi } from "../types/ICategory";

export function categoryMapper(item: ICategoryApi[]): ICategory[] {
	return item.map((item) => {
		return {
			id: item?.id,
			name: item?.name,
			functionInGame: item?.functionInGame,
			serverId: item?.serverId,
			products: item?.products?.map((product) => ({
				id: product?.id,
				name: product?.name,
				image: product?.image,
				price: product?.price,
				serverId: product?.serverId,
				gameItemName: product?.gameItemName,
			})),
		};
	});
}
