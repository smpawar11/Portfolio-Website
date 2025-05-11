import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import './About.scss';

const About = () => {
  const skills = [
    { id: 1, name: 'HTML & CSS', proficiency: 90 },
    { id: 2, name: 'JavaScript', proficiency: 85 },
    { id: 3, name: 'React', proficiency: 80 },
    { id: 4, name: 'Node.js', proficiency: 75 },
    { id: 5, name: 'MongoDB', proficiency: 70 },
    { id: 6, name: 'Python', proficiency: 80 },
    { id: 7, name: 'Java', proficiency: 75 },
    { id: 8, name: 'C++', proficiency: 75 },
    { id: 9, name: 'C', proficiency: 75 },
    { id: 10, name: 'SQL', proficiency: 75 },
    { id: 11, name: 'RESTful APIs', proficiency: 75 },
    { id: 12, name: 'Database Management', proficiency: 70 },
    { id: 13, name: 'Cloud Services', proficiency: 70 },
    { id: 14, name: 'DevOps', proficiency: 60 },
    { id: 15, name: 'Agile Methodologies', proficiency: 70 },
    { id: 16, name: 'Git & Version Control', proficiency: 80 },
    { id: 17, name: 'Responsive Design', proficiency: 85 },
    { id: 18, name: 'UI/UX Design', proficiency: 75 }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi there! 👋 I'm a university student currently studying Computer Science, diving deep into the world of tech, code, and everything in between. 
            When I'm not solving problems or exploring new frameworks, you'll probably find me coaching badminton, listening to music, or geeking out over cars. 
            This site is a little window into my journey—projects, passions, and everything I'm learning along the way. Glad you're here!
          </p>
          <p>
            My journey in programming began when I was in Sixth Form, and it has evolved into a dedication to
            building elegant, efficient, and user-friendly applications. I enjoy tackling complex problems and
            turning them into simple, intuitive solutions.
          </p>
          <p>
            I firmly believe in collaboration and continuous learning to drive innovation and create impactful solutions. My goal is to contribute to projects that make a difference and to grow both personally and professionally in the ever-evolving tech landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-subtitle">My Skills</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="services">
          <h3 className="section-subtitle">What I Offer</h3>
          <div className="services-grid">
            <motion.div 
              className="service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="service-icon">
                <FaCode />
              </div>
              <h4>Frontend Development</h4>
              <p>I create responsive and interactive user interfaces using modern frameworks and libraries.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="service-icon">
                <FaServer />
              </div>
              <h4>Backend Development</h4>
              <p>I build robust server-side applications with secure API endpoints and efficient data handling.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="service-icon">
                <FaDatabase />
              </div>
              <h4>Database Design</h4>
              <p>I design and implement database schemas with a focus on performance and scalability.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h4>Responsive Web Design</h4>
              <p>I ensure websites look and function perfectly across all devices and screen sizes.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
