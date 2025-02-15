import React from 'react';
import "../styles/About.css";
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I'm a <span className="highlight">Frontend Developer</span> with a passion for crafting 
            sleek, responsive, and high-performance web applications. My focus is on delivering 
            engaging **UI/UX** experiences through **modern web technologies**.
          </p>
  
          <h3>Skills & Tech Stack 🛠️</h3>
          <ul className="skills-list">
            <li>🔥 HTML5, CSS3, JavaScript (ES6+)</li>
            <li>⚛️ React.js, React Router</li>
            <li>🎨 Responsive Web Design (Flexbox & Grid)</li>
            <li>🛠️ Git & GitHub</li>
            <li>📡 REST API Integration</li>
          </ul>
  
          <h3>My Goals 🚀</h3>
          <p>
            I'm constantly learning and improving my skills to become a **full-stack developer**. 
            My next step is diving deeper into **backend development** with Node.js and databases.
          </p>
  
          <Link to="/projects" className="cta-button">Check My Work</Link>
        </div>
      </div>
    );
  };
  
  export default About;