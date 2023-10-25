'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';

export default function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <div>
      <p>Carrinho</p>
      <p>produtos:</p>
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
