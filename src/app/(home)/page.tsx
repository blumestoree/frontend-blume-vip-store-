import { url } from '@/src/utils/url';
import { ICategory } from '@/src/types/ICategory';
import HomeBanner from './sections/banner';
import HomeItems from './sections/items';
import Link from 'next/link';

async function getAllCategoryWithProductsData(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${url}/findAllCategory`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const response = await getAllCategoryWithProductsData();

  return (
    <main className='font-open_Sans relative bg-red-500 py-8'>
      <Link href='/login'>Login</Link>
      <br />
      <Link href='/cadastro'>Cadastrar</Link>
      <HomeBanner />
      <HomeItems categories={response} />
    </main>
  );
}
