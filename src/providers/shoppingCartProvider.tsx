'use client';

import { useState, createContext, useContext } from 'react';
interface ICartItems {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface ÍCartContextProps {
  cartItems: ICartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>;
  addItem: (item: ICartItems) => void;
  removeItem: (itemId: string) => void;
  removeAllItems: () => void;
  getCartTotal: () => number;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ÍCartContextProps);

export default function CartProvider({ children }: AppProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);

  const addItem = (item: ICartItems) => {
    setCartItems((oldItems) => [...oldItems, item]);
  };

  const removeItem = (itemId: string) => {
    setCartItems(
      cartItems.filter((product) => {
        itemId !== product.id;
      })
    );
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  const getCartTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        removeAllItems,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
