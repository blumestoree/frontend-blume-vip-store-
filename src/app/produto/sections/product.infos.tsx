'use client';

import { IProduct } from '@/src/types/IProduct';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Image from 'next/image';

interface ProductInfosProps {
  dataProduct: IProduct;
}

export default function ProductInfos({ dataProduct }: ProductInfosProps) {
  const { addItem } = useCart();

  return (
    <div className='m-auto pt-[70px] sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl'>
      <div className='flex'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${dataProduct?.image}`}
          width={665}
          height={658}
          alt='product-image'
        />
        <div>
          <p className='text-4xl'>{dataProduct?.name}</p>
          <p className='text-2xl'>{dataProduct?.price}</p>
          <button
            className='bg-blue-600'
            onClick={() =>
              addItem({
                id: dataProduct?.id,
                image: dataProduct?.image,
                name: dataProduct?.name,
                price: dataProduct?.price,
              })
            }
          >
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}
