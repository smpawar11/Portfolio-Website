import React from 'react';
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
        <ProjectsSection />
      </motion.div>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Home;