import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">SP</Link>
        </div>
        
        <div className={`mobile-menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className="nav-item"><a href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li className="nav-item"><a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li className="nav-item"><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li className="nav-item"><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;