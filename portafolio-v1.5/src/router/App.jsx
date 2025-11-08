import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/layouts/Layout.jsx';
import Home from '@/pages/Home/Home.jsx';
import About from '@/pages/About/About.jsx';
import Projects from '@/pages/Projects/Projects.jsx';
import Skills from '@/pages/Skills/Skills.jsx';
import Contact from '@/pages/Contact/Contact.jsx';
import Profile from '@/pages/Profile/Profile.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
