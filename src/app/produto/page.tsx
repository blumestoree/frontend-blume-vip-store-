import { IProduct } from '@/src/types/IProduct';
import { serverId, url } from '@/src/utils/url';
import Producs from './sections/product.allProducts';
import { ICategory } from '@/src/types/ICategory';

async function getAllProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${url}/findAllProduct?serverId=${serverId}`);
    return response.json();
  } catch (error) {
    return [];
  }
}

async function getAllCategoriesr(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${url}/findAllCategory?serverId=${serverId}`);
    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Products() {
  const products = await getAllProducts();
  const categories = await getAllCategoriesr();

  return (
    <div>
      <Producs products={products} categories={categories} />
    </div>
  );
}
