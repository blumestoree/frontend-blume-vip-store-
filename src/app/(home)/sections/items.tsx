import { IProducts } from '@/src/types/IProducts';
import Link from 'next/link';

export default function HomeItems({ products }: IProducts) {
  return (
    <div>
      {products?.map((product) => (
        <Link href={`produto/${product?.id}`} key={product?.id}>
          <div className='bg-blue-400 p-4'>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>VER</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
