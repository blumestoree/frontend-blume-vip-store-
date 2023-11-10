import { ICategory } from '@/src/types/ICategory';
import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '/public/product.png';

interface IHomeItems {
  categories: ICategory[];
}

export default function HomeItems({ categories }: IHomeItems) {
  return (
    <div className='p-10'>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <div>{category.name}</div>
            <div className='grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
              {category.products.map((product) => (
                <Link
                  className='m-auto w-[285px]'
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
                    <div className='bg-blue-600'>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                      <p>{product.price * 2} sem juros</p>
                      <div>adicionar no carrinho</div>
                      <div>ver produto</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
