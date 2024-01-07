export interface IProduct {
  id: string;
  name: string;
  gameItemName: string;
  image: string;
  price: number;
  serverId: string;
  categoryId: string;
  category: {
    id: string;
    functionInGame: string;
    name: string;
  };
}
