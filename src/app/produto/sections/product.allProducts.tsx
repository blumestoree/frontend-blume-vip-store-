import Image from 'next/image';
import ProductImage from '/public/img/product.png';
import { IProduct } from '@/src/types/IProduct';
import Link from 'next/link';
import ProductCard from '@/src/components/productCard';

export default function Producs({ products }: { products: IProduct[] }) {
  return (
    <div className='grid-style'>
      <div>
        <div className='flex justify-between py-10'>
          <div>Resultados {products.length}</div>
          <div>Mais recentes</div>
        </div>
        <div className='flex'>
          <div className='w-1/4'>Categorias</div>
          <div className='grid w-3/4 grid-cols-3 gap-6'>
            {products.map((product) => (
              <div key={product?.id}>
                {/* <Link href={`produto/${product?.id}`} key={product?.id}> */}
                <ProductCard key={product?.id} product={product} />
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
