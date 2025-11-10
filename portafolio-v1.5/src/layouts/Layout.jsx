import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import Barra_navigation from '@/components/Barra_navigation/Navigation_bar';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block">
        <NavBar />
      </div>

      <Barra_navigation />

      <main className="flex-1 pb-16">
        <Outlet />
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
