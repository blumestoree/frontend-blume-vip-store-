'use client';
import { useCart } from '@/src/providers/shoppingCartProvider';
import Link from 'next/link';
import Image from 'next/image';
import CloseCartSvg from '/public/svg/arrow.svg';
import ShoppingCartIcon from '/public/svg/shopping-cart.svg';
import ArrowIcon from '/public/svg/arrow.svg';
import Modal from 'react-modal';
import TestImage from '/public/img/test.png';

export default function ShoppingCart() {
  const { isOpen, setIsOpen } = useCart();
  const { cartItems, removeItem, removeAllItems, getCartTotal } = useCart();

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
          base: 'fixed inset-0 bg-black/50 z-10',
          afterOpen: '',
          beforeClose: '',
        }}
        className={{
          base: `absolute right-0 top-0 flex h-screen w-[500px] translate-x-full transform flex-col bg-white transition`,
          afterOpen: `${
            isOpen ? '!translate-x-0' : '!translate-x-full'
          } transition`,
          beforeClose: '',
        }}
        closeTimeoutMS={200}
      >
        <div className='flex justify-between p-3'>
          <button onClick={() => setIsOpen(false)}>
            <Image src={CloseCartSvg} width={20} height={20} alt='close' />
          </button>
          <div className='flex gap-3'>
            <div className='flex items-center gap-2 rounded-lg border border-blue-500 p-2 font-medium text-blue-500'>
              <Image src={ArrowIcon} width={15} height={15} alt='remove item' />
              <p>{cartItems?.length} item</p>
            </div>
            <button
              onClick={() => {
                removeAllItems();
              }}
              className='rounded-lg bg-blue-500 p-2 font-medium'
            >
              Limpar carrinho
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2 overflow-y-scroll py-5'>
          {cartItems.map((product) => (
            <div key={product.id} className='flex gap-2 bg-blue-100 px-1 py-3'>
              <Image
                src={TestImage}
                // src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/${product?.image}`}
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
        <div className='mt-auto flex flex-col p-3 shadow-custom'>
          <div className='flex justify-between'>
            <div className='text-xl text-gray-500 '>Total</div>
            <div className='text-xl font-bold'>
              {getCartTotal()?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </div>
          </div>
          <button className='mt-2 bg-[#00546B] p-2 text-white'>
            <Link href={`/checkout`}>Finalizar a compra</Link>
          </button>
        </div>
      </Modal>
    </div>
  );
}
