import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@/styles/App.css';

import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Asider from './pages/Asider/Asider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Barra_navigation from './pages/Barra_navigation/Navigation_bar';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/header" className="hover:text-blue-500">
          Header
        </Link>
        <Link to="/asider" className="hover:text-blue-500">
          Asider
        </Link>
        <Link to="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-500">
          Contact
        </Link>
        <Link to="/barra_navigation" className="hover:text-blue-500">
          Barra Navigation
        </Link>
        <Link to="/footer" className="hover:text-blue-500">
          Footer
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Asider" element={<Asider />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/barra_navigation" element={<Barra_navigation />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
