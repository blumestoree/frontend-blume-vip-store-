import Image from 'next/image';
import ShoppingCart from '../shoppingCart';
import BlumeIcon from '/public/blume.png';

export default function Header() {
  return (
    <header className='fixed flex h-[70px] w-full items-center justify-between bg-blue-900 px-[384px]'>
      <div className='flex items-center gap-3'>
        <div className='text-xl font-bold text-white'>BLUME ROLEPLAY</div>
        <Image
          className='m-auto'
          src={BlumeIcon}
          width={30}
          height={30}
          alt='blume icon'
        />
      </div>
      <input
        className='h-[32px] w-2/4 rounded'
        placeholder='O que está procurando?'
      />
      <div className='flex gap-5'>
        <div className='text-base font-medium text-white'>
          <div>Login</div>
          <div>Cadastrar</div>
        </div>
        <ShoppingCart />
      </div>
    </header>
  );
}
