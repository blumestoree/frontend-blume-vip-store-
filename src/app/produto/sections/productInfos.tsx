'use client';

import { api } from '@/src/service/api';
import { IProduct } from '@/src/types/IProduct';
import { useRouter } from 'next/navigation';

interface ProductInfosProps {
  dataProduct: IProduct | null;
}

export default function ProductInfos({ dataProduct }: ProductInfosProps) {
  const router = useRouter();
  const buyProduct = async (productId: string | undefined) => {
    try {
      await api.post(`/buyProduct/${productId}`, productId);
    } catch (error) {
      router.push('/login');
    }
  };

  return (
    <div>
      <p>{dataProduct?.name}</p>
      <p>{dataProduct?.price}</p>
      <p>{dataProduct?.id}</p>
      <p>{dataProduct?.serverId}</p>
      <button onClick={() => buyProduct(dataProduct?.id)}>COMPRAR</button>
    </div>
  );
}
