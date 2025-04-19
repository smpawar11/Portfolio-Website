import React from 'react';
import './HeroSection.css';
import profilePlaceholder from '../../../assets/profile-placeholder';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Sumedh Pawar</h1>
            <h2 className="hero-subtitle">Aspiring Software Engineer</h2>
            <p className="hero-description">
              Building impactful digital experiences through elegant code.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img src={profilePlaceholder} alt="Sumedh Pawar" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;