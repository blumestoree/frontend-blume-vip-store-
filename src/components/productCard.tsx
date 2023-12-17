'use client';

import Image from 'next/image';
import Link from 'next/link';
import TestImage from '/public/img/test.png';
import { IProduct } from '../types/IProduct';
import { useCart } from '../providers/shoppingCartProvider';

interface IProductComponent {
  product: IProduct;
}

export default function ProductCard({ product }: IProductComponent) {
  const { addItem } = useCart();

  return (
    <div className='group relative mb-10 overflow-hidden rounded border-2 border-black'>
      <Link href={`produto/${product?.id}`} key={product?.id}>
        <Image
          src={TestImage}
          // src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/${product?.image}`}
          width={285}
          height={300}
          alt='product-image'
        />
      </Link>
      <div>
        <p className='mt-5 text-xl font-bold'>{product?.name}</p>
        <p className='my-2'>
          {product?.price?.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <div className='absolute bottom-0 w-full bg-red-600 opacity-0 group-hover:animate-overlayShow'>
          <button
            onClick={() =>
              addItem({
                id: product?.id,
                image: product?.image,
                name: product?.name,
                price: product?.price,
              })
            }
          >
            adicionar no carrinho
          </button>
          <div>ver produto</div>
        </div>
      </div>
    </div>
  );
}
