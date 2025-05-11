import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sumedh Pawar</h3>
            <p>University Student & Developer</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/smpawar11" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sumedhmpawar/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/sumedhmpawar" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/11sumedhp_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sumedh Pawar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
