import '@/styles/pages/Home/Logo.css';
import { Link } from 'react-router-dom';
import logo_soylion from '@/assets/logo_soylion/soylion.png';

function SobreMi() {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col items-center logo-container mb-7">
        <Link to="/">
          <img src={logo_soylion} className="mb-4 logo soylion" alt="logo soylion" />
        </Link>
        <h2 className="text-5xl text-gray-200 md:text-5xl font-futuristic floating-title">ROBIN LEON</h2>
      </div>

      <div className="flex justify-center">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-col items-start mb-4">
            <h2 className="inline-block text-xl font-semibold border-b-2 border-indigo-500">Sobre mí</h2>
          </div>
          <p className="leading-relaxed text-gray-300 fade-slide">
            I’m a software developer passionate about modern web development, where I combine user-centered design (UX/UI) with clean,
            efficient code. I take a results-oriented approach—analyzing, designing, developing, and refining every project with great
            attention to detail. My goal is to deliver quality, performance, and an outstanding user experience. I embrace new technologies
            and enjoy continuous learning to stay ahead in the ever-evolving world of development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
