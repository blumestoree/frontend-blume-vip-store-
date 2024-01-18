import Image from 'next/image';
import ShoppingCart from '@/src/components/shoppingCart';
import BlumeIcon from '/public/img/blume.png';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default function Header() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('blume_user_data')?.value;
  const userData = cookieValue ? JSON.parse(cookieValue) : null;

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
        <div className='flex items-center gap-5 text-white'>
          {userData ? (
            <div>Olá {userData?.name}</div>
          ) : (
            <div className='flex flex-col gap-2 text-base font-medium'>
              <Link
                className='rounded bg-blue-400 px-4 text-center hover:bg-blue-500'
                href={'/conta'}
              >
                Login
              </Link>
              <Link
                className='rounded bg-blue-400 px-4 text-center hover:bg-blue-500'
                href={'/conta'}
              >
                Cadastrar
              </Link>
            </div>
          )}
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
