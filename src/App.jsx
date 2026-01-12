import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home" className="section home-section">
        <div className="section-content">
          <h1>Welcome to Our Website</h1>
          <p>This is the home section of our website.</p>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-content">
          <h1>About Us</h1>
          <p>Learn more about what we do and who we are.</p>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-content">
          <h1>Our Services</h1>
          <p>Discover the services we offer to our clients.</p>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="section-content">
          <h1>Portfolio</h1>
          <p>Check out our latest projects and work.</p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us today!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
