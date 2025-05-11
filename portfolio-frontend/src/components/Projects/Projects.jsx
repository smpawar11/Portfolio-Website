import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'University Course Manager',
      description: 'A comprehensive web application for managing university courses, student enrollments, and professor assignments. Features include course registration, grade tracking, and schedule generation.',
      image: 'course-manager.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/sumedhmpawar/course-manager',
      liveDemo: 'https://course-manager-demo.netlify.app',
      category: 'web'
    },
    {
      id: 2,
      title: 'AI Study Assistant',
      description: 'An AI-powered study assistant that helps students organize study materials, create flashcards, and generate practice quizzes based on uploaded lecture notes and textbooks.',
      image: 'ai-study-assistant.jpg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenAI API'],
      github: 'https://github.com/sumedhmpawar/ai-study-assistant',
      liveDemo: 'https://ai-study-assistant.herokuapp.com',
      category: 'ai'
    },
    {
      id: 3,
      title: 'Sustainable Campus',
      description: 'A mobile application that promotes sustainability on university campuses by tracking waste reduction efforts, energy usage, and providing eco-friendly tips and challenges.',
      image: 'sustainable-campus.jpg',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Expo'],
      github: 'https://github.com/sumedhmpawar/sustainable-campus',
      liveDemo: 'https://sustainable-campus.io',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Research Paper Analyzer',
      description: 'A tool that analyzes research papers using NLP to extract key findings, methodologies, and bibliographic relationships, helping researchers quickly grasp the important aspects of academic papers.',
      image: 'research-analyzer.jpg',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Django', 'D3.js'],
      github: 'https://github.com/sumedhmpawar/research-analyzer',
      liveDemo: 'https://research-paper-analyzer.dev',
      category: 'ai'
    },
    {
      id: 5,
      title: 'Student Budget Tracker',
      description: 'A financial management application specifically designed for university students to track expenses, set savings goals, and receive budgeting advice tailored to student life.',
      image: 'budget-tracker.jpg',
      technologies: ['JavaScript', 'React', 'Firebase', 'Material UI', 'Chart.js'],
      github: 'https://github.com/sumedhmpawar/student-budget',
      liveDemo: 'https://studentbudgetapp.com',
      category: 'web'
    },
    {
      id: 6,
      title: 'Virtual Study Group',
      description: 'A platform for creating and joining virtual study groups with video conferencing, shared whiteboard, file sharing, and integrated pomodoro timer for productive study sessions.',
      image: 'virtual-study.jpg',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/sumedhmpawar/virtual-study',
      liveDemo: 'https://virtualstudy.group',
      category: 'web'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.split(' ')[0][0]}{project.title.split(' ')[1][0]}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="https://github.com/sumedhmpawar" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
};

export default Projects;
