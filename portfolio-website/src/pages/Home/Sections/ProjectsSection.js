import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from '../../../components/ImageModal/ImageModal';
import './ProjectsSection.css';

// Import placeholder images
import placeholderImage1 from '../../../assets/placeholder1.jpg';
import placeholderImage2 from '../../../assets/placeholder2.jpg';
import placeholderImage3 from '../../../assets/placeholder3.jpg';

const ProjectsSection = () => {
  // Sample project data with images
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/ecommerce-project",
      demoLink: "https://ecommerce-project.example.com",
      images: [
        { 
          src: placeholderImage1, 
          alt: "E-Commerce Platform Dashboard", 
          caption: "Main dashboard showing sales analytics"
        },
        { 
          src: placeholderImage2, 
          alt: "Product Listing Page", 
          caption: "Product catalog with filtering options"
        },
        { 
          src: placeholderImage3, 
          alt: "Shopping Cart", 
          caption: "Shopping cart with checkout process"
        }
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/yourusername/task-manager",
      demoLink: "https://task-manager.example.com",
      images: [
        { 
          src: placeholderImage2, 
          alt: "Task Board Overview", 
          caption: "Kanban board with multiple task columns"
        },
        { 
          src: placeholderImage3, 
          alt: "Task Details", 
          caption: "Task details and comment section"
        },
        { 
          src: placeholderImage1, 
          alt: "Team Dashboard", 
          caption: "Team productivity dashboard"
        }
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard using external APIs with location-based forecasts.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      demoLink: "https://weather-app.example.com",
      images: [
        { 
          src: placeholderImage3, 
          alt: "Weather Dashboard", 
          caption: "Current weather conditions and forecast"
        },
        { 
          src: placeholderImage1, 
          alt: "Location Search", 
          caption: "Search for different locations"
        }
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills (the one you're looking at right now).",
      technologies: ["React", "CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio-website",
      demoLink: "#",
      images: [
        { 
          src: placeholderImage1, 
          alt: "Portfolio Home Page", 
          caption: "Home page with hero section"
        },
        { 
          src: placeholderImage2, 
          alt: "Projects Section", 
          caption: "Project showcase with filtering"
        }
      ]
    }
  ];

  // State for filter options
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [uniqueTechnologies, setUniqueTechnologies] = useState([]);

  // State for image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open image modal
  const openModal = (images, startIndex) => {
    setModalImages(images);
    setCurrentImageIndex(startIndex || 0);
    setModalOpen(true);
  };

  // Animation variants for projects
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3,
      }
    }
  };

  // Initialize filters and filtered projects
  useEffect(() => {
    // Extract unique technologies
    const technologies = new Set(['All']);
    projectsData.forEach(project => {
      project.technologies.forEach(tech => {
        technologies.add(tech);
      });
    });
    setUniqueTechnologies(Array.from(technologies));
    
    // Set initial filtered projects to all projects
    setFilteredProjects(projectsData);
  }, []);

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projectsData);
      return;
    }
    
    const filtered = projectsData.filter(project => 
      project.technologies.includes(filter)
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="projects" className="projects-section section-dark">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Filter buttons */}
        <div className="filter-container">
          {uniqueTechnologies.map((tech, index) => (
            <button 
              key={index} 
              className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
              onClick={() => handleFilterChange(tech)}
            >
              {tech}
              {activeFilter === tech && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="activeIndicator"
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Projects grid with animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid" 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                className="project-card" 
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.12)"
                }}
              >
                <div className="project-content">
                  {project.images && project.images.length > 0 && (
                    <div 
                      className="project-image-container"
                      onClick={() => openModal(project.images, 0)}
                    >
                      <img 
                        src={project.images[0].src} 
                        alt={project.images[0].alt || project.title} 
                        className="project-image" 
                      />
                      <div className="image-overlay">
                        <i className="fas fa-search-plus"></i>
                        <span>View Gallery ({project.images.length})</span>
                      </div>
                    </div>
                  )}
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span 
                        className={`tech-tag ${tech === activeFilter ? 'active-tag' : ''}`} 
                        key={index}
                      >
                        {tech}
                      </span>
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
              </motion.div>
            ))}
            
            {filteredProjects.length === 0 && (
              <motion.div 
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>No projects found with the selected technology.</p>
                <button className="reset-filter" onClick={() => handleFilterChange('All')}>
                  Show all projects
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </section>
  );
};

export default ProjectsSection;