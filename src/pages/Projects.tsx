import React from 'react';

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      title: "Persepolis Escola",
      description: "Hub de inovação socioambiental e tecnológico focado em capacitar jovens da periferia através de tecnologia e criatividade, promovendo autonomia e pensamento crítico.",
      technologies: ["Vue.js", "Vue Router", "Vuex", "Tailwind", "Responsive Design"],
      link: "https://persepolisescola.com/"
    },
    {
      title: "Projeto 2",
      description: "",
      technologies: [],
      link: "#"
    },
    
  ];

  return (
    <div className="projects-content">
      <div className="projects-header">
        <button className="terminal-button back-button" onClick={onBack}>
          ← Voltar
        </button>
        <h2 className="terminal-title">PROJETOS DISPONÍVEIS</h2>
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
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 