import { url } from '@/src/utils/url';
import { IProducts } from '@/src/types/IProducts';
import HomeBanner from './sections/banner';
import HomeItems from './sections/items';
import Link from 'next/link';

async function getAllProdutcsData(): Promise<IProducts[]> {
  try {
    const response = await fetch(`${url}/findAllProduct`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const dataProducts = await getAllProdutcsData();

  return (
    <main className='font-open_Sans relative bg-red-500 py-8'>
      <Link href='/login'>Login</Link>
      <br />
      <Link href='/cadastro'>Cadastrar</Link>
      <HomeBanner />
      <HomeItems products={dataProducts} />
    </main>
  );
}
