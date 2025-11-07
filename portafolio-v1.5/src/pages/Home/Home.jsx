import { Link } from 'react-router-dom';
import '@/styles/pages/Home/Logo.css';
import logo_soylion from '@/assets/logo_soylion/soylion.png';
import FloatingParagraph from '@/components/FloatingParagraph';

function Home() {
  return (
    <div className="flex flex-col items-center text-center logo-container">
      <Link to="/">
        <img src={logo_soylion} className="logo soylion" alt="logo soylion" />
      </Link>

      <h1 className="mt-4 text-4xl font-futuristic md:text-5xl text-cyan-400 text-glow">ROBIN LEON</h1>

      <div className="max-w-3xl mx-auto mt-7">
        <FloatingParagraph
          text="
        I’m a software developer passionate about modern web development, where I combine user-centered design (UX/UI) with clean, 
        efficient code. I take a results-oriented approach—analyzing, designing, developing, 
        and refining every project with great attention to detail. 
        My goal is to deliver quality, performance, and an outstanding user experience. 
        I embrace new technologies and enjoy continuous learning to stay ahead in the ever-evolving world of development."
        />
      </div>
    </div>
  );
}

export default Home;
