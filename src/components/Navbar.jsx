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
          <h2>MyLogo</h2>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
        </div>

        <div className="nav-contact">
          <button onClick={() => scrollToSection('contact')} className="contact-btn">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
