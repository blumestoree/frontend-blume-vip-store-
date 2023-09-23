import { url } from '@/src/utils/url';
import Banner from './sections/banner';
import Items from './sections/items';

async function getAllProdutcsData() {
  const response = await fetch(`${url}/findAllProduct`, {
    cache: 'no-store',
  });
  return response.json();
}
export default async function Home() {
  const dataProducts = await getAllProdutcsData();

  return (
    <main>
      <Banner />
      <Items products={dataProducts?.products} />
    </main>
  );
}
