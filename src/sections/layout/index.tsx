import Header from './header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full min-h-screen flex-col'>
      <Header />
      {children}
    </div>
  );
}
