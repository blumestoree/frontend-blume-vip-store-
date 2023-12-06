import { IProduct } from './IProduct';

export interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}
