import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-5 text-center text-white bg-black ">
      &copy; 2025 Robin Leon All rights reserved.
      <div className="flex items-center justify-center gap-4 m-4">
        <FaLinkedin className="text-2xl transition text-cyan-300 hover:text-white" />
        <FaGithub className="text-2xl transition text-cyan-300 hover:text-white" />
        <FaEnvelope className="text-2xl transition text-cyan-300 hover:text-white" />
      </div>
    </footer>
  );
}

export default Footer;
