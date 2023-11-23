import ShoppingCart from '../shoppingCart';

export default function Header() {
  return (
    <header className='fixed flex h-[70px] w-full items-center justify-between bg-blue-900 px-72'>
      <div className='text-xl font-bold text-white'>BLUME ROLEPLAY</div>
      <input
        className='h-[32px] w-2/4 rounded'
        placeholder='O que está procurando?'
      />
      <div className='flex'>
        <div>
          <div>Login</div>
          <div>Cadastrar</div>
        </div>
        <ShoppingCart />
      </div>
    </header>
  );
}
