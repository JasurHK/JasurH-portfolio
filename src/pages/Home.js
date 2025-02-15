import React , { useEffect, useRef } from 'react';
import "../styles/Home.css";
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import me from '../assets/jasurotino.jpg';


const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect();
      const imageCenterX = rect.left + rect.width / 2;
      const imageCenterY = rect.top + rect.height / 2;

      const cursorX = e.clientX;
      const cursorY = e.clientY;

      // Calculate distance between cursor and image center
      const distance = Math.sqrt(
        Math.pow(cursorX - imageCenterX, 2) + Math.pow(cursorY - imageCenterY, 2)
      );

      // If cursor is within 300px, move the image away
      if (distance < 300) {
        const deltaX = cursorX - imageCenterX;
        const deltaY = cursorY - imageCenterY;

        // Move the image in the opposite direction
        image.style.transform = `translate(${-deltaX / 10}px, ${-deltaY / 10}px)`;
      } else {
        // Return to original position
        image.style.transform = 'translate(0, 0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Hi, I'm <span className="highlight">Jasur</span>
          </h1>
          <p>
            A passionate <span className="highlight">Web Developer</span> who
            loves crafting modern, stylish, and functional websites. I focus on
            clean UI/UX and great performance.
          </p>
          <Link to="/contact" className="contact-button">
            Contact Me
          </Link>
        </div>

        <div className="home-image">
          <div className="escaping-image" ref={imageRef}>
            <img src={me} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;