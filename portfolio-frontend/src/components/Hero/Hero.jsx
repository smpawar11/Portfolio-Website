import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/Screenshot 2025-05-11 at 11.02.02.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Sumedh Pawar</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            University Student & Aspiring Developer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm passionate about building innovative web applications 
            and exploring new technologies to solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="profile-image">
            <img src={profileImage} alt="Sumedh Pawar" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

export default Hero;
