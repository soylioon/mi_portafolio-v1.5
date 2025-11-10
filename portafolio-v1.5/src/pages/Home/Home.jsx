import { Link } from 'react-router-dom';
import '@/styles/pages/Home/Logo.css';
import logo_soylion from '@/assets/logo_soylion/soylion.png';
import FloatingParagraph from '@/components/FloatingParagraph';

function Home() {
  return (
    <div className="px-9 py-14 md:px-4 md:py-10">
      <div className="flex flex-col items-center logo-container mb-7">
        <Link to="/">
          <img src={logo_soylion} className="mb-4 logo soylion" alt="logo soylion" />
        </Link>
        <h1 className="text-5xl text-gray-200 md:text-5xl font-futuristic floating-title">ROBIN LEON</h1>
      </div>

      <div className="flex justify-center">
        <div className="max-w-3xl space-y-4">
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
    </div>
  );
}

export default Home;
