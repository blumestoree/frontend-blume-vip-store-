'use client';

import { IProduct } from '@/src/types/IProduct';
import { useCart } from '@/src/providers/shoppingCartProvider';

interface ProductInfosProps {
  dataProduct: IProduct;
}

export default function ProductInfos({ dataProduct }: ProductInfosProps) {
  const { addItem } = useCart();

  return (
    <div>
      <p>{dataProduct?.name}</p>
      <p>{dataProduct?.price}</p>
      <p>{dataProduct?.id}</p>
      <p>{dataProduct?.serverId}</p>

      <button
        onClick={() =>
          addItem({
            id: dataProduct?.id,
            name: dataProduct?.name,
            price: dataProduct?.price,
            serverId: dataProduct?.serverId,
          })
        }
      >
        ADICIONAR AO CARRINHO
      </button>
    </div>
  );
}
