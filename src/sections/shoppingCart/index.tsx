'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Link from 'next/link';
import Image from 'next/image';
import CartImage from '/public/blume.png';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ShoppingCartIcon from '/public/shopping-cart.svg';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(true);
  const { cartItems } = useCart();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={ShoppingCartIcon}
            width={30}
            height={30}
            alt='cart image'
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />
        <Dialog.Content className='absolute right-0 top-0 h-screen w-[500px] bg-red-700 '>
          <div className='flex justify-between'>
            <Dialog.Close asChild>
              <button>CLOSE</button>
            </Dialog.Close>
            <Dialog.Description className='text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal'>
              Make changes to your profile here. Click save when done.
            </Dialog.Description>
          </div>
          <div className='mb-[15px] flex items-center gap-5'>ITEM 1</div>
          <div className='mb-[15px] flex items-center gap-5'>ITEM 1</div>
          <div className='mb-[15px] flex items-center gap-5'>ITEM 1</div>
          <div className='mb-[15px] flex items-center gap-5'>ITEM 1</div>

          <div>
            <div className='flex'>
              <p>Subtotal</p>
              <p>50</p>
            </div>
            <Dialog.Close asChild>
              <Link href={`/checkout`}>FINALIZAR COMPRA</Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
