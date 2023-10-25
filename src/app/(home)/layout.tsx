import ShoppingCart from '@/src/sections/shoppingCart';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <ShoppingCart />
      </div>
      {children}
    </section>
  );
}
