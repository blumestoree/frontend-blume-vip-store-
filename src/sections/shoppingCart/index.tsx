'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Link from 'next/link';
import Image from 'next/image';
import CloseCartSvg from '/public/svg/arrow.svg';
import { useState } from 'react';
import ShoppingCartIcon from '/public/svg/shopping-cart.svg';
import Modal from 'react-modal';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const cartAnimationClass = isOpen ? 'animateOpenCart' : 'animateCloseCart';

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <Image src={ShoppingCartIcon} width={30} height={30} alt='cart image' />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel='Shopping Cart Modal'
        overlayClassName={{
          base: 'fixed inset-0 bg-black/50',
          afterOpen: '',
          beforeClose: '',
        }}
        className={{
          base: `absolute right-0 top-0 flex h-screen w-[500px] transform flex-col bg-white p-5 animate-${cartAnimationClass}`,
          afterOpen: '',
          beforeClose: '',
        }}
        closeTimeoutMS={200}
      >
        <div className='flex justify-between'>
          <button onClick={() => setIsOpen(false)}>
            <Image src={CloseCartSvg} width={20} height={20} alt='close' />
          </button>
          <div className='flex gap-3'>
            <div className='rounded border p-1'>1 item</div>
            <button className='rounded bg-blue-500 p-1'>limpar carrinho</button>
          </div>
        </div>
        <div className='flex flex-col gap-10 overflow-y-scroll py-5'>
          <div className='bg-blue-500 px-1 py-3'>produto 1</div>
        </div>
        <div className='mt-auto flex justify-between'>
          <div>Total</div>
          <div>200</div>
        </div>
        <Link href={`/checkout`}>FINALIZAR COMPRA</Link>
      </Modal>
    </div>
  );
}
