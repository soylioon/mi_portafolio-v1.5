import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import logo_soylion from '@/assets/logo_soylion/soylion.png';

function Perfil() {
  return (
    <div className="px-4 py-20">
      <div className="flex flex-col items-center space-y-8 text-center">
        <Link to="/">
          <div className="w-40 h-40 border-4 rounded-full border-cyan-300 overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:scale-105 transition duration-300">
            <img src={logo_soylion} className="object-cover w-full h-full" alt="Logo soylion" />
          </div>
        </Link>

        <div>
          <h2 className="text-4xl text-gray-100 font-futuristic floating-title">ROBIN LEON</h2>
          <p className="mt-2 text-lg text-cyan-300">Software Developer</p>
        </div>

        <p className="max-w-2xl px-3 leading-relaxed text-gray-300 fade-slide">
          I am a committed developer focused on building clean, scalable, and meaningful digital experiences. I combine{' '}
          <span className="text-cyan-300">user-centered design</span> with strong
          <span className="text-cyan-300"> software engineering principles</span>, always aiming for simplicity, functionality, and visual
          impact.
        </p>
      </div>
    </div>
  );
}

export default Perfil;
