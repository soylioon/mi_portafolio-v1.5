import { Link } from 'react-router-dom';

function proyectos() {
  const proyectos = [
    {
      title: 'Sales System',
      description: 'Web system to manage clients, sales, inventory and reporting in real time.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      link: '#',
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio designed and built with scalable UI and smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      link: '#',
    },
    {
      title: 'Web App',
      description: 'Application built to optimize workflow and provide a smooth user experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      title: 'Restaurant Inventory System',
      description: 'Software to manage restaurant ingredients, expiration dates, suppliers, and cost control.',
      tech: ['PHP', 'MySQL', 'Laravel', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Mini Productivity App',
      description: 'Lightweight app to track tasks, time and daily goals with a clean interface.',
      tech: ['React', 'LocalStorage', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Full Stack Combo System', 
      description: 'Hybrid solution mixing UI/UX, backend APIs, and modern front-end workflow.',
      tech: ['Node.js', 'React', 'Express', 'MySQL'],
      link: '#',
    },
    {
      title: 'my AI personal',
      description: 'Hybrid solution mixing UI/UX, and modern front-end workflow.',
      tech: ['script.js', 'html', 'css'],
      link: 'https://soylioon.github.io/AI-soylion/',
    },
  ];

  return (
    <div className="px-4 py-16">
      <h2 className="flex justify-center mb-12 text-4xl text-center align-center floating-title font-futuristic text-cyan-300">
        My Projects
      </h2>

      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-700 bg-black/30 backdrop-blur-sm hover:scale-[1.03] hover:border-cyan-400 transition duration-300"
          >
            <h3 className="mb-3 text-xl font-semibold text-cyan-300">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs text-gray-300 border border-gray-600 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Link
                to={project.link}
                className="inline-block px-4 py-2 text-sm transition-all duration-300 border rounded-lg border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default proyectos;
