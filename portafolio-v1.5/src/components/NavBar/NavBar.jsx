import { Link } from 'react-router-dom';
import ButtonCV from '@/components/buttons/ButtonCV/CV';

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-black shadow-sm">
        <nav className="flex gap-15">
          <Link to="/" className="transition hover:text-blue-600">
            HOME
          </Link>

          <Link to="/about" className="transition hover:text-blue-600">
            About Me
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

        <div className="mr-4">
          <ButtonCV />
        </div>
      </div>
    </>
  );
}

export default NavBar;
