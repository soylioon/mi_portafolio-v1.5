import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-sm">
      <Link to="/" className="hover:text-blue-600 transition">
        Home
      </Link>

      <Link to="/about" className="hover:text-blue-600 transition">
        about
      </Link>

      <Link to="/Skills" className="hover:text-blue-600 transition">
        Skills
      </Link>

      <Link to="/Projects" className="hover:text-blue-600 transition">
        Projects
      </Link>

      <Link to="/contact" className="hover:text-blue-600 transition">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
