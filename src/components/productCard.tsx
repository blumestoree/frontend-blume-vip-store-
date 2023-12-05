import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '/public/img/product.png';
import { IProduct } from '../types/IProduct';

interface IProductComponent {
  product: IProduct;
}

export default function ProductCard({ product }: IProductComponent) {
  return (
    <Link
      className='group relative mb-10 overflow-hidden rounded border-2 border-black'
      href={`produto/${product?.id}`}
      key={product?.id}
    >
      <div>
        <Image
          src={ProductImage}
          width={285}
          height={300}
          alt='product-image'
        />
        <div>
          <p className='mt-5 text-xl font-bold'>{product.name}</p>
          <p className='my-2'>
            {product.price?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <div className='absolute bottom-0 w-full bg-red-600 opacity-0 group-hover:animate-overlayShow'>
            <div>adicionar no carrinho</div>
            <div>ver produto</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
