import React from 'react';

function Skills() {
  const skills = [
    {
      title: "HTML & CSS",
      description: "Building the foundation of the web with semantic markup and responsive styling.",
      icon: "🎨"
    },
    {
      title: "JavaScript",
      description: "Dynamic interactivity and client-side logic for modern web applications.",
      icon: "⚡"
    },
    {
      title: "Node.js & Express.js",
      description: "Server-side JavaScript runtime and framework for building scalable APIs.",
      icon: "🖥️"
    },
    {
      title: "React & Next.js",
      description: "Modern frontend frameworks for building interactive, performant user interfaces.",
      icon: "⚛️"
    },
    {
      title: "Nest.js & Python/Django",
      description: "Structured backend frameworks for enterprise-grade applications.",
      icon: "🐍"
    },
    {
      title: "Databases",
      description: "MySQL, PostgreSQL, and MongoDB for data persistence and management.",
      icon: "🗄️"
    }
  ];

  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">My Skills</div>
          <h1 className="heading">
            Technologies I work with <span className="accent-text">every day.</span>
          </h1>
          <p className="section-description">
            A comprehensive list of the tools and technologies I use to build modern web applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="skills-path">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="card skill-card">
                <div className="flex items-center gap-3">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="skill-title">{skill.title}</h3>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
              <div className="skill-icon">
                <div className="skill-icon-inner">
                  <div className="skill-icon-glow"></div>
                  <span style={{ fontSize: '32px' }}>{skill.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
