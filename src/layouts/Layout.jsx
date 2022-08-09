import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='h-screen flex flex-col'>
      <div className='h-full'>
        <Outlet />
      </div>
    </main>
  );
};

export { Layout };
