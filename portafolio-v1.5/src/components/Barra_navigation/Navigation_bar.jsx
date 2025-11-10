import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LuUserRound } from 'react-icons/lu';

function Barra_navigation() {
  const location = useLocation();

  const links = [
    { to: '/', icon: <FaHome />, label: 'Home' },
    { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { to: '/profile', icon: <FaUser />, label: 'Profile' },
    { to: '/skills', icon: <HiOutlineLightBulb />, label: 'Skills' },
    { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-3 border-t bg-black/40 backdrop-blur-md border-cyan-300 md:hidden">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`flex flex-col items-center text-sm transition ${
            location.pathname === link.to ? 'text-cyan-300' : 'text-white'
          } hover:text-cyan-300`}
        >
          <div className="text-xl">{link.icon}</div>
          <span className="text-xs">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Barra_navigation;
