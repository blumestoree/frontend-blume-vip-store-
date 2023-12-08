'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Link from 'next/link';
import Image from 'next/image';
import CloseCartSvg from '/public/svg/arrow.svg';
import { useState } from 'react';
import ShoppingCartIcon from '/public/svg/shopping-cart.svg';
import ArrowIcon from '/public/svg/arrow.svg';
import Modal from 'react-modal';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeItem, removeAllItems, getCartTotal } = useCart();

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
            <div className='rounded border p-1'>{cartItems?.length} item</div>
            <button
              onClick={() => {
                removeAllItems();
              }}
              className='rounded bg-blue-500 p-1'
            >
              limpar carrinho
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2 overflow-y-scroll py-5'>
          {cartItems.map((product) => (
            <div key={product.id} className='flex gap-2 bg-blue-100 px-1 py-3'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${product?.image}`}
                width={100}
                height={50}
                alt='product image'
              />
              <div>
                <div>{product?.name}</div>
                <div>{product?.price}</div>
              </div>
              <button
                className='ml-auto'
                onClick={() => {
                  removeItem(product?.id);
                }}
              >
                <Image
                  src={ArrowIcon}
                  width={30}
                  height={30}
                  alt='remove item'
                />
              </button>
            </div>
          ))}
        </div>
        <div className='mt-auto flex justify-between'>
          <div>Total</div>
          <div>{getCartTotal()}</div>
        </div>
        <Link href={`/checkout`}>FINALIZAR COMPRA</Link>
      </Modal>
    </div>
  );
}
