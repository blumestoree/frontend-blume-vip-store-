import ShoppingCart from '@/src/sections/shoppingCart';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
