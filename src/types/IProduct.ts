export interface IProduct {
	id: string;
	name: string;
	gameItemName: string;
	image: string;
	price: number;
	serverId: string;
	categoryId: string;
}

export type IProductWithoutCategoryId = Omit<IProduct, "categoryId">;
