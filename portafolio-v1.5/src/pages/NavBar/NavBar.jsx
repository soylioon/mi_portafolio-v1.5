import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-black shadow-sm">
        <nav className="flex gap-15">
          <Link to="/" className="hover:text-blue-600 transition">
            HOME
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

        <div className="flex gap-4">
          <button className="btn-white" type="button">
            Ver CV
          </button>
          <button className="btn-white" type="button">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
