import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '@/pages/Home/Home.jsx';
import Header from '@/pages/Header/Header.jsx';
import NavBar from '@/pages/NavBar/NavBar.jsx';
import About from '@/pages/About/About.jsx';
import Projects from '@/pages/Projects/Projects.jsx';
import Skills from '@/pages/Skills/Skills.jsx';
import Contact from '@/pages/Contact/Contact.jsx';
import Profile from '@/pages/Profile/Profile.jsx';
import Barra_navigation from '@/pages/Barra_navigation/Navigation_bar.jsx';
import Footer from '@/pages/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/barra_navigation" element={<Barra_navigation />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
