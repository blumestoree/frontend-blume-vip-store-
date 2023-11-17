import ShoppingCart from '../shoppingCart';

export default function Header() {
  return (
    <header className='flex h-[70px] items-center justify-between bg-blue-900 px-10'>
      <div className='text-xl font-bold text-white'>BLUME ROLEPLAY</div>
      <ShoppingCart />
    </header>
  );
}
