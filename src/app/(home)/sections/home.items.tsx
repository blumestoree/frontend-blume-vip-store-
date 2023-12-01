import { ICategory } from '@/src/types/ICategory';
import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '/public/product.png';

interface IHomeItems {
  categories: ICategory[];
}

const items = [
  {
    id: 'string',
    name: 'categoria boa',
    products: [
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
    ],
  },
  {
    id: 'string',
    name: 'categoria boa',
    products: [
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
      { id: 'string', name: 'produtinho', image: 'produtinho', price: 100 },
    ],
  },
];

export default function HomeItems({ categories }: IHomeItems) {
  return (
    <div className='m-auto py-10 sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl'>
      {items.map((category) => (
        <div key={category.id}>
          <div className='flex justify-between'>
            <div className='mb-5 text-xl font-bold text-black'>
              {category.name}
            </div>
            <Link href='/produto' className='text-sm text-black/50'>
              VER TODOS
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4'>
            {category.products.slice(0, 4).map((product) => (
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
