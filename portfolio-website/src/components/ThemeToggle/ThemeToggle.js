import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../utils/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-track">
        <motion.div 
          className="toggle-thumb"
          initial={false}
          animate={{ 
            x: theme === 'dark' ? 22 : 0,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        />
        <div className="toggle-icon light-icon">
          <i className="fas fa-sun"></i>
        </div>
        <div className="toggle-icon dark-icon">
          <i className="fas fa-moon"></i>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;