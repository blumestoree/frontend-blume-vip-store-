'use client';

import { useState, createContext, useContext } from 'react';

interface ICart {
  name: string;
  id: string;
  price: string;
}

interface ÍCartContextProps {
  cartItems: ICart[];
  setCartItems: React.Dispatch<React.SetStateAction<ICart[]>>;
  addItem: (item: ICart) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ÍCartContextProps);

export default function CartProvider({ children }: AppProviderProps) {
  const [cartItems, setCartItems] = useState<ICart[]>([
    { name: 'teste', id: 'abc', price: '123' },
  ]);

  const addItem = (item: ICart) => {
    setCartItems((oldItems) => [...oldItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
