'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Link from 'next/link';

export default function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <div>
      <p>Carrinho</p>
      <p>produtos:</p>
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Link href={`/checkout`}>FINALIZAR COMPRA</Link>
    </div>
  );
}
