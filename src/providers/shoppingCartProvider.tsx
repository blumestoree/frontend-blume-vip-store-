'use client';

import { useState, createContext, useContext } from 'react';
import { IProduct } from '../types/IProduct';

type IProducOmitItems = Omit<IProduct, 'image' | 'category' | 'categoryId'>;

interface ÍCartContextProps {
  cartItems: IProducOmitItems[];
  setCartItems: React.Dispatch<React.SetStateAction<IProducOmitItems[]>>;
  addItem: (item: IProducOmitItems) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ÍCartContextProps);

export default function CartProvider({ children }: AppProviderProps) {
  const [cartItems, setCartItems] = useState<IProducOmitItems[]>([]);

  const addItem = (item: IProducOmitItems) => {
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
