import { url } from '@/src/utils/url';
import { IProducts } from '@/src/types/IProducts';
import HomeBanner from './sections/banner';
import HomeItems from './sections/items';

async function getAllProdutcsData(): Promise<IProducts> {
  try {
    const response = await fetch(`${url}/findAllProduct`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    return { products: [] };
  }
}

export default async function Home() {
  const dataProducts = await getAllProdutcsData();

  return (
    <main className='font-open_Sans relative bg-red-500 py-8'>
      <HomeBanner />
      <HomeItems products={dataProducts?.products} />
    </main>
  );
}
