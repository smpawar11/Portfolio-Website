import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import HeroSection from './Sections/HeroSection';
import ProjectsSection from './Sections/ProjectsSection';
import AboutSection from './Sections/AboutSection';
import ContactSection from './Sections/ContactSection';

const Home = () => {
  // Wrapper animation for each section to create a cohesive feel
  const sectionVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

  useEffect(() => {
    // Check if there's a section to scroll to (set from the Header when coming from Blog page)
    const sectionToScrollTo = sessionStorage.getItem('scrollToSection');
    
    if (sectionToScrollTo) {
      // Small delay to allow the page to render first
      setTimeout(() => {
        const section = document.getElementById(sectionToScrollTo);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the stored section to prevent unwanted scrolling on future visits
        sessionStorage.removeItem('scrollToSection');
      }, 100);
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero section doesn't need the animation as it's the first thing visible */}
      <HeroSection />
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div id="projects"><ProjectsSection /></div>
      </motion.div>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div id="about"><AboutSection /></div>
      </motion.div>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div id="contact"><ContactSection /></div>
      </motion.div>
    </div>
  );
};

export default Home;