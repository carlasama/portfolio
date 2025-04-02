import React from 'react';

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      title: "Persepolis Escola",
      description: "Socio-environmental and technological innovation hub focused on empowering young people from underserved communities through technology and creativity, fostering autonomy and critical thinking.",
      technologies: ["Vue.js", "Vue Router", "Vuex", "Tailwind", "Responsive Design"],
      link: "https://persepolisescola.com/"
    },
    {
      title: "Project 2",
      description: "",
      technologies: [],
      link: "#"
    },
    
  ];

  return (
    <div className="projects-content">
      <div className="projects-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h2 className="terminal-title">Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 