import React from 'react';
import '../styles/globals.css'

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Jasur's Portfolio</p>
    </footer>
  );
}

export default Footer;