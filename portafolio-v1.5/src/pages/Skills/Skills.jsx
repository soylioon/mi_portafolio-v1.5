function habilidades() {
  const skillCategories = [
    {
      category: 'Languages',
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
    <h2 className="mb-10 text-4xl text-center text-gray-200 md:text-5xl font-futuristic">
      {text.split('').map((char, index) => (
        <span key={index} className="floating-letter" style={{ animationDelay: `${index * 0.05}s` }}>
          {char}
        </span>
      ))}
    </h2>
  );

  return (
    <section className="py-16 text-white bg-black">
      <div className="max-w-6xl px-4 mx-auto">
        <FloatingText text="Mis Habilidades" />

        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((cat, index) => (
            <div key={index} className="animate-fade-slide">
              <h3 className="mb-4 font-serif text-2xl text-gray-200">{cat.category}</h3>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="transition-colors hover:text-white">
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
