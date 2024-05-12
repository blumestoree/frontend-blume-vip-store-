import type { IProduct } from "./IProduct";

export interface ICategory {
	id: string;
	name: string;
	serverId: string;
	functionInGame: string;
	products: IProduct[];
}
