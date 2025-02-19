import React from 'react';
import '../styles/Projects.css'
// Import project images
import musicPlayerImg from "../assets/music-player.png";
import weatherAppImg from "../assets/weather-app.png";
import ecommerceImg from "../assets/ecommerce.png";
import todoListImg from "../assets/todo-list.png";

const projects = [
    {
      id: 1,
      title: "Music Player 🎵",
      description: "A sleek music player with playlist and shuffle features.",
      image: musicPlayerImg,
      link: "https://utmusic.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App ⛅",
      description: "Get real-time weather updates from any location.",
      image: weatherAppImg,
      link: "https://weather-app-dem.netlify.app/",
    },
    {
      id: 3,
      title: "E-commerce Store 🛒",
      description: "A modern e-commerce platform with cart & payment integration.",
      image: ecommerceImg,
      link: "https://your-ecommerce-app-link.com/",
    },
    {
      id: 4,
      title: "To-Do List ✅",
      description: "A simple and effective to-do list for task management.",
      image: todoListImg,
      link: "https://task-manager-c.netlify.app",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;