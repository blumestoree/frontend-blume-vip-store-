'use client';

import { useState, createContext, useContext } from 'react';
import { IProduct } from '../types/IProduct';

interface ÍCartContextProps {
  cartItems: IProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addItem: (item: IProduct) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ÍCartContextProps);

export default function CartProvider({ children }: AppProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addItem = (item: IProduct) => {
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
