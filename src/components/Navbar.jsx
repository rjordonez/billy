import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Billy</h2>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('timeline')} className="nav-link">Timeline</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Pricing</button>
        </div>

        <div className="nav-contact">
          <button onClick={() => scrollToSection('contact')} className="contact-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
