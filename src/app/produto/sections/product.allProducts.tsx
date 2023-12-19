import { IProduct } from '@/src/types/IProduct';
import ProductCard from '@/src/components/productCard';
import { ICategory } from '@/src/types/ICategory';
import SelectComponent from './select';

export default function Producs({
  products,
  categories,
}: {
  products: IProduct[];
  categories: ICategory[];
}) {
  return (
    <div className='grid-style'>
      <div>
        <div className='flex justify-between py-10'>
          <div>Resultados {products.length}</div>
          <SelectComponent />
        </div>
        <div className='flex'>
          <div className='w-1/4'>
            <p className='mb-5 text-2xl font-bold'>Categorias</p>
            {categories.map((category) => (
              <div className='mb-3 flex items-center gap-2' key={category.id}>
                <input
                  className='h-4 w-4 shrink-0 appearance-none rounded-sm border-2
                  border-black/50 bg-white
                  checked:border-0 checked:bg-blue-800 hover:border-blue-800'
                  type='checkbox'
                />
                <p className='text-base'>{category.name}</p>
              </div>
            ))}
          </div>
          <div className='grid w-3/4 grid-cols-3 gap-6'>
            {products.map((product) => (
              <div key={product?.id}>
                <ProductCard key={product?.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
