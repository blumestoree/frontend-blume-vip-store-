import { url, serverId } from '@/src/utils/url';
import { ICategory } from '@/src/types/ICategory';
import HomeBanner from './sections/home.banner';
import HomeItems from './sections/home.items';

async function getAllCategory(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${url}/findAllCategory?serverId=${serverId}`);
    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const response = await getAllCategory();
  console.log(response);

  return (
    <main>
      <HomeBanner />
      <HomeItems categories={response} />
    </main>
  );
}
