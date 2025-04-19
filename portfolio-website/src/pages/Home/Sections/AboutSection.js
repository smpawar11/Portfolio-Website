import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
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
                  <ul className="skills-list">
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C/C++</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">Frameworks & Libraries</h4>
                  <ul className="skills-list">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Django</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">Tools & Technologies</h4>
                  <ul className="skills-list">
                    <li>Git & GitHub</li>
                    <li>MongoDB</li>
                    <li>SQL Databases</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
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