'use client';

import { IProduct } from '@/src/types/IProduct';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Image from 'next/image';
import TestImage from '/public/img/test.png';

interface IProductInfos {
  product: IProduct;
}

export default function ProductInfos({ product }: IProductInfos) {
  const { addItem } = useCart();

  return (
    <div className=' bg-blue-100/30 py-[70px]'>
      <div className='grid-style'>
        <div className='flex justify-center gap-5'>
          <Image
            // src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/${product?.image}`}
            src={TestImage}
            width={665}
            height={658}
            alt='product-image'
          />
          <div className='flex flex-col gap-4'>
            <p className='text-3xl font-medium'>{product?.name}</p>
            <div className='mr-auto rounded-lg bg-blue-500 p-1'>
              {product?.category?.name}
            </div>
            <div className='flex h-[150px] w-[400px] flex-col justify-center gap-4 rounded bg-blue-100/50 p-6 text-center'>
              <p className='text-3xl font-bold'>
                {product?.price?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <button
                className='bg-[#00546B] p-1 text-white'
                onClick={() =>
                  addItem({
                    id: product?.id,
                    image: product?.image,
                    name: product?.name,
                    price: product?.price,
                  })
                }
              >
                Adicionar no carrinho
              </button>
              <button className='border border-[#00546B] p-1'>
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
