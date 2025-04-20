import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      errors[key] = error;
      if (error) {
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Validate the field if it's been touched
    if (touched[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    setValidationErrors(prev => ({
      ...prev,
      [name]: validateField(name, formData[name])
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(touched).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // This is a placeholder for actual form submission
    // In a real implementation, you would send this to a backend API
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset touched state after successful submission
      setTouched({
        name: false,
        email: false,
        message: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  // Animation variants for form elements
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  // Form feedback animation variants
  const feedbackVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="contact" className="contact-section section-dark">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="social-links-contact">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                whileHover={{ y: -5, color: "#3B82F6" }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ y: -5, color: "#3B82F6" }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                whileHover={{ y: -5, color: "#3B82F6" }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                whileHover={{ y: -5, color: "#3B82F6" }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.name && validationErrors.name ? 'error' : ''}
                />
                {touched.name && validationErrors.name && (
                  <motion.p 
                    className="form-error-message"
                    variants={feedbackVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <i className="fas fa-exclamation-circle"></i> {validationErrors.name}
                  </motion.p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.email && validationErrors.email ? 'error' : ''}
                />
                {touched.email && validationErrors.email && (
                  <motion.p 
                    className="form-error-message"
                    variants={feedbackVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <i className="fas fa-exclamation-circle"></i> {validationErrors.email}
                  </motion.p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.message && validationErrors.message ? 'error' : ''}
                ></textarea>
                {touched.message && validationErrors.message && (
                  <motion.p 
                    className="form-error-message"
                    variants={feedbackVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <i className="fas fa-exclamation-circle"></i> {validationErrors.message}
                  </motion.p>
                )}
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={formVariants}
              >
                {formStatus.submitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>
              
              {formStatus.submitted && (
                <motion.p 
                  className="form-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <i className="fas fa-check-circle"></i> Your message has been sent successfully!
                </motion.p>
              )}
              
              {formStatus.error && (
                <motion.p 
                  className="form-error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <i className="fas fa-times-circle"></i> Sorry, there was an error sending your message.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;