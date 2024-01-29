'use client';

import { create } from 'zustand';

interface ICartItems {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface ICartContextPropsTest {
  cartItems: ICartItems[];
  isOpen: boolean;
  addItem: (item: ICartItems) => void;
  removeItem: (itemId: string) => void;
  removeAllItems: () => void;
  getCartTotal: () => number;
  handleOpenIsOpen: () => void;
}

export const useStore = create<ICartContextPropsTest>((set, get) => ({
  cartItems: [],
  isOpen: false,
  addItem: (item) =>
    set((oldState) => ({
      cartItems: [...oldState.cartItems, item],
    })),
  removeItem: (itemId) =>
    set((oldState) => ({
      cartItems: oldState.cartItems.filter((product) => itemId !== product.id),
    })),
  removeAllItems: () =>
    set(() => ({
      cartItems: [],
    })),
  getCartTotal: () => {
    const cartItems = get().cartItems;
    return cartItems.reduce((total, item) => total + item.price, 0);
  },
  handleOpenIsOpen: () => {
    set((oldState) => ({
      isOpen: !oldState.isOpen,
    }));
  },
}));
