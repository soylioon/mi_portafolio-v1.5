import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Icon_contact() {
  return (
    <div className="flex items-center justify-center gap-4 m-4">
      <a href="http://linkedin.com/in/soylion">
        <FaLinkedin className="text-2xl transition text-cyan-300 hover:text-white" />
      </a>
      <a href="https://github.com/soylioon?tab=repositories">
        <FaGithub className="text-2xl transition text-cyan-300 hover:text-white" />
      </a>
      <a href="mailto:soylion.com@gmail.com">
        <FaEnvelope className="text-2xl transition text-cyan-300 hover:text-white" />
      </a>
    </div>
  );
}

export default Icon_contact;
