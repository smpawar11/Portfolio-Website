import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // Sample project data - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/ecommerce-project",
      demoLink: "https://ecommerce-project.example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/yourusername/task-manager",
      demoLink: "https://task-manager.example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard using external APIs with location-based forecasts.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      demoLink: "https://weather-app.example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills (the one you're looking at right now).",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/yourusername/portfolio-website",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section section-dark">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;