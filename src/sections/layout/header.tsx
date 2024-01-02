import Image from 'next/image';
import ShoppingCart from '@/src/components/shoppingCart';
import BlumeIcon from '/public/img/blume.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed z-10 flex h-[70px] w-full items-center justify-between bg-[#101010]'>
      <div className='grid-style flex items-center justify-between'>
        <Link className='flex items-center gap-3' href={'/'}>
          <div className='text-xl font-bold text-white'>BLUME ROLEPLAY</div>
          <Image
            className='m-auto'
            src={BlumeIcon}
            width={30}
            height={30}
            alt='blume icon'
          />
        </Link>
        <input
          className='h-[32px] w-2/4 rounded'
          placeholder='O que está procurando?'
        />
        <div className='flex items-center gap-5'>
          <div className='text-base font-medium text-white'>
            <div>Login</div>
            <div>Cadastrar</div>
          </div>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
