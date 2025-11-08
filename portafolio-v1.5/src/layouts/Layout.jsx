import { Outlet } from 'react-router-dom';
import NavBar from '@/pages/NavBar/NavBar.jsx';
import Footer from '@/components/Footer/Footer.jsx';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
