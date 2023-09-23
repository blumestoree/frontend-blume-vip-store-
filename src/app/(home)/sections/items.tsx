import { IProducts } from '@/src/types/IProducts';
import Link from 'next/link';

export default function Items({ products }: IProducts) {
  return (
    <div>
      {products.map((product) => (
        <Link href={`produto/${product?.productId}`} key={product?.productId}>
          <div>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>VER</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
