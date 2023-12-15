import { ICategory } from '@/src/types/ICategory';
import Link from 'next/link';
import ProductCard from '@/src/components/productCard';

interface IHomeItems {
  categories: ICategory[];
}

export default function HomeItems({ categories }: IHomeItems) {
  return (
    <div className='m-auto pt-[70px] sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl'>
      {categories.map((category) => (
        <div key={category?.id}>
          <div className='flex justify-between'>
            <div className='mb-5 text-xl font-bold text-black'>
              {category?.name}
            </div>
            <Link href='/produto' className='text-sm text-black/50'>
              VER TODOS
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4'>
            {category?.products?.slice(0, 4).map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
