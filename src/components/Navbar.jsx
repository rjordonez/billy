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
          <button onClick={() => scrollToSection('validate')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('control')} className="nav-link">Spending</button>
          <button onClick={() => scrollToSection('automation')} className="nav-link">Automation</button>
        </div>

        <div className="nav-contact">
          <button onClick={() => scrollToSection('contact')} className="contact-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
