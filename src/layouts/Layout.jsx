import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='h-screen flex flex-col'>
      <nav className='bg-gray-500 p-4'>NavBar</nav>
      <div className='h-full'>
        <Outlet />
      </div>
      <footer className='bg-gray-300 p-3'>Footer</footer>
    </main>
  );
};

export { Layout };
