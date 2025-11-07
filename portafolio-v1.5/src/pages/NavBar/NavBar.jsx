import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-black shadow-sm">
        <nav className="flex gap-15">
          <Link to="/" className="transition hover:text-blue-600">
            HOME
          </Link>

          <Link to="/about" className="transition hover:text-blue-600">
            about
          </Link>

          <Link to="/skills" className="transition hover:text-blue-600">
            Skills
          </Link>

          <Link to="/projects" className="transition hover:text-blue-600">
            Projects
          </Link>

          <Link to="/profile" className="transition hover:text-blue-600">
            Perfil
          </Link>

          <Link to="/contact" className="transition hover:text-blue-600">
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
