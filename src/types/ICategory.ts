import type { IProductWithoutCategoryId } from "./IProduct";
export interface ICategory {
	id: string;
	name: string;
	serverId: string;
	functionInGame: string;
	products: IProductWithoutCategoryId[];
}

export interface ICategoryApi {
	id: string;
	name: string;
	serverId: string;
	functionInGame: string;
	products: IProductWithoutCategoryId[];
}
