import { Link } from 'react-router-dom';
import '@/styles/pages/Home/Logo.css';
import logo_soylion from '@/assets/logo_soylion/soylion.png';

function Home() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo_soylion} className="logo soylion" alt="logo soylion" />
      </Link>
      <h1>soylion</h1>
    </div>
  );
}

export default Home;
