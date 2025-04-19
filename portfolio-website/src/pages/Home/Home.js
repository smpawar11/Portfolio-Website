import React from 'react';
import './Home.css';
import HeroSection from './Sections/HeroSection';
import ProjectsSection from './Sections/ProjectsSection';
import AboutSection from './Sections/AboutSection';
import ContactSection from './Sections/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;