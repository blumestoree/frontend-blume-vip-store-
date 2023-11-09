export interface ICategory {
  id: string;
  name: string;
  products: {
    id: string;
    name: string;
    image: string;
    price: number;
  }[];
}
