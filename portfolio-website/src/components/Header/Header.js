import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // If we're already on the home page, smooth scroll to section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleSectionLink = (sectionId) => {
    // If we're on the blog page or any other page except home
    if (location.pathname !== '/') {
      // We need to navigate to home first, then to the section
      // We'll store the section to navigate to in sessionStorage
      sessionStorage.setItem('scrollToSection', sectionId);
    } else {
      // We're already on the home page, just scroll
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={scrollToTop}>SP</Link>
        </div>
        
        <div className={`mobile-menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li className="nav-item">
              <Link 
                to="/" 
                onClick={() => handleSectionLink('projects')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/" 
                onClick={() => handleSectionLink('about')}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/" 
                onClick={() => handleSectionLink('contact')}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item"><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;