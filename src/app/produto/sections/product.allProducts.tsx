import Image from 'next/image';
import ProductImage from '/public/img/product.png';
import { IProduct } from '@/src/types/IProduct';
import Link from 'next/link';

const items = [
  {
    id: 'string',
    name: 'produtinho',
    image: 'produtinho',
    price: 100,
  },
  {
    id: 'string',
    name: 'produtinho',
    image: 'produtinho',
    price: 100,
  },
  {
    id: 'string',
    name: 'produtinho',
    image: 'produtinho',
    price: 100,
  },
  {
    id: 'string',
    name: 'produtinho',
    image: 'produtinho',
    price: 100,
  },
  {
    id: 'string',
    name: 'produtinho',
    image: 'produtinho',
    price: 100,
  },
];

export default function Producs({ products }: IProduct[]) {
  return (
    <div className='tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 grid grid-cols-1 gap-6'>
      {items.map((product) => (
        <div key={product.id}>
          <Link href={`produto/${product?.id}`} key={product?.id}>
            <div key={product.id}>
              <Image
                src={ProductImage}
                width={285}
                height={300}
                alt='product-image'
              />
              <div className='bg-blue-600'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.price * 2} sem juros</p>
                <div>adicionar no carrinho</div>
                <div>ver produto</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
