import { IProduct } from '@/src/types/IProduct';
import { url } from '@/src/utils/url';

interface Props {
  params: {
    slug: string;
  };
}

async function getProdutcData(slug: string): Promise<IProduct | null> {
  try {
    const response = await fetch(`${url}/findProduct/${slug}`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    return null;
  }
}

export default async function Product({ params }: Props) {
  const dataProduct = await getProdutcData(params.slug);

  return (
    <div>
      <p>{dataProduct?.name}</p>
      <p>{dataProduct?.price}</p>
      <p>{dataProduct?.productId}</p>
      <p>{dataProduct?.serverId}</p>
      <button>COMPRAR</button>
    </div>
  );
}
