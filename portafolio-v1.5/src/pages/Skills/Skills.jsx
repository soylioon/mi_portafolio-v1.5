import React from 'react';

function habilidades() {
  const skillCategories = [
    {
      category: '🧰 Languages',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'Unix Shell'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Bootstrap', 'Laravel', 'UI/UX Design', 'React + Tailwind'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'phpMyAdmin', 'Oracle'],
    },
    {
      category: 'Development Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'VS Code'],
    },
    {
      category: 'Others',
      skills: ['XAMPP', 'Gickraker'],
    },
  ];

  const FloatingText = ({ text }) => (
    <h2 className="text-4xl md:text-5xl font-futuristic text-gray-200 text-center mb-10">
      {text.split('').map((char, index) => (
        <span key={index} className="floating-letter" style={{ animationDelay: `${index * 0.05}s` }}>
          {char}
        </span>
      ))}
    </h2>
  );

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <FloatingText text="Mis Habilidades" />

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, index) => (
            <div key={index} className="animate-fade-slide">
              <h3 className="text-2xl font-serif mb-4 text-gray-200">{cat.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="hover:text-white transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default habilidades;
