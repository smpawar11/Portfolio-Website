import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  // Define skill levels for animated progress bars
  const skills = {
    programming: [
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "C/C++", level: 65 },
      { name: "HTML/CSS", level: 90 }
    ],
    frameworks: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Express", level: 70 },
      { name: "Django", level: 60 },
      { name: "Bootstrap", level: 85 }
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "MongoDB", level: 65 },
      { name: "SQL Databases", level: 70 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 }
    ]
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="about" className="about-section section-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Hi there! I'm Sumedh Pawar, an aspiring software engineer passionate about building innovative solutions that make a difference. 
              With a strong foundation in computer science and a knack for problem-solving, I enjoy tackling complex challenges and turning them into elegant solutions.
            </p>
            
            <p className="about-paragraph">
              I'm currently pursuing my degree in Computer Science, where I've developed a solid understanding of algorithms, data structures, and software development principles.
              My academic journey has equipped me with both theoretical knowledge and practical skills essential for success in the tech industry.
            </p>

            <p className="about-paragraph">
              Beyond coding, I'm enthusiastic about staying current with emerging technologies and industry trends. I believe in continuous learning and constantly seek opportunities to expand my skill set.
            </p>
            
            <div className="skills-container">
              <h3 className="skills-title">My Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="category-title">Programming Languages</h4>
                  <div className="skills-progress-list">
                    {skills.programming.map((skill, index) => (
                      <div className="skill-progress-item" key={index}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar-container">
                          <motion.div 
                            className="progress-bar"
                            custom={skill.level}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">Frameworks & Libraries</h4>
                  <div className="skills-progress-list">
                    {skills.frameworks.map((skill, index) => (
                      <div className="skill-progress-item" key={index}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar-container">
                          <motion.div 
                            className="progress-bar"
                            custom={skill.level}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">Tools & Technologies</h4>
                  <div className="skills-progress-list">
                    {skills.tools.map((skill, index) => (
                      <div className="skill-progress-item" key={index}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar-container">
                          <motion.div 
                            className="progress-bar"
                            custom={skill.level}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;