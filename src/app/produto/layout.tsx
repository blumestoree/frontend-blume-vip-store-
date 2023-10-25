import ShoppingCart from '@/src/sections/shoppingCart';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className='bg-green-400'>
        <ShoppingCart />
      </div>
      {children}
    </section>
  );
}
