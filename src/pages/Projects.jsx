import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../lib/projects';

function Projects() {
  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">Selected work</div>
          <h1 className="heading">
            Case studies packaged around <span className="accent-text">real project proof.</span>
          </h1>
          <p className="section-description">
            Each project is framed the way a serious evaluator reviews delivery: the problem, the constraints, the solution, the outcome, and the technologies that made it work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.slug} 
                className={`card project-card ${project.upcoming ? 'card-upcoming' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="project-number">
                    NO. {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-year">{project.year}</span>
                  {project.upcoming && (
                    <span className="badge badge-solid">Upcoming</span>
                  )}
                </div>

                <h2 className="project-title">{project.title}</h2>
                <p className="project-tagline">{project.tagline}</p>

                <div className="grid grid-2 gap-6 mt-6 mb-8">
                  <div>
                    <h3 className="project-section-title">Problem</h3>
                    <p className="project-section-text">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="project-section-title">Solution</h3>
                    <p className="project-section-text">{project.approach}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="project-section-title">Key Highlights</h3>
                  <ul className="project-highlights space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="project-highlight">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="project-section-title">Technologies</h3>
                  <div className="tech-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="badge badge-purple">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {!project.upcoming && (
                    <Link to={`/projects/${project.slug}`} className="project-link">
                      View full case study →
                    </Link>
                  )}
                  {project.github && !project.upcoming && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link-secondary">
                      GitHub
                    </a>
                  )}
                  {project.live && !project.upcoming && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link-secondary">
                      Live Demo
                    </a>
                  )}
                  {project.upcoming && (
                    <span className="project-link" style={{ color: 'var(--purple)' }}>
                      In Progress — Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
