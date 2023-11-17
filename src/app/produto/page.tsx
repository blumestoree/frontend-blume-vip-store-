import { IProduct } from '@/src/types/IProduct';
import { url } from '@/src/utils/url';
import Producs from './sections/product.allProducts';

async function getAllProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${url}/findAllProducts`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Products() {
  const response = await getAllProducts();

  return (
    <div>
      <Producs products={response} />
    </div>
  );
}
