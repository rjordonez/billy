import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FinancialDashboard from './components/FinancialDashboard';
import './App.css';

function App() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <>
      <Navbar />
      <div className="app">
        <section id="home" className="section home-section">
        <div className="hero-content">
          <h1>Bookkeeping, Done Right From Day One</h1>
          <p className="subtitle">Built by founders, for founders.<br />Save thousands in mistakes and wasted time.</p>

          <div className="hero-cta">
            <button className="cta-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Become a Partner
            </button>
          </div>

          <p className="hero-audience">Built for early-stage, first-time US founders</p>
        </div>
      </section>

      <section id="problems" className="section problems-section">
        <div className="problems-container">
          <h2 className="problems-headline">Founders Easily Overlook Bookkeeping, Until It Catches Up</h2>

          <div className="problems-list">
            <div className="problem-card">
              <div className="problem-icon">✕</div>
              <p className="problem-text">I don't know what counts as a business expense</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">✕</div>
              <p className="problem-text">I paid out of pocket, is that bad?</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">✕</div>
              <p className="problem-text">I have receipts everywhere… email, photos, PDFs</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">✕</div>
              <p className="problem-text">I'll fix bookkeeping later (but I know that's risky)</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">✕</div>
              <p className="problem-text">I'm scared of fines, penalties, or screwing up taxes</p>
            </div>
          </div>

          <p className="problems-transition">You're not alone. We felt this exact pain.</p>
        </div>
      </section>
      </div>

      <div className="app">
      <section id="our-story" className="section our-story-section">
        <div className="our-story-container">
          <h2 className="our-story-title">Our Story</h2>
          <p className="our-story-subtitle">We're Jessie and Rex. We built our first company the hard way—<br />so you can build yours the right way.</p>

          <div className="timeline">
            <div className="timeline-line"></div>

            <div
              className={`timeline-event ${activeEvent === 0 ? 'active' : ''}`}
              onClick={() => setActiveEvent(0)}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-date">Year 1</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="demo-label">Raising funding</span>
                  </div>
                </div>
                <h3 className="timeline-heading">Product Over Everything</h3>
                <p className="timeline-description">After raising funding, we focused on building and finding PMF. Bookkeeping felt secondary, so we handled it ourselves without really understanding the rules.</p>
              </div>
            </div>

            <div
              className={`timeline-event ${activeEvent === 1 ? 'active' : ''}`}
              onClick={() => setActiveEvent(1)}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-date">Tax Season</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="demo-label">Tax deadline stress</span>
                  </div>
                </div>
                <h3 className="timeline-heading">When It Caught Up</h3>
                <p className="timeline-description">
                  Our books weren't set up right. Deadlines slipped, payroll taxes went wrong, and penalties followed. By the time we noticed, fixing it was costly.<br />
                  <br />
                  Cleanup meant weeks of stress and thousands in fees—rebuilding records and second-guessing deductions instead of growing the business.
                </p>
              </div>
            </div>

            <div
              className={`timeline-event ${activeEvent === 2 ? 'active' : ''}`}
              onClick={() => setActiveEvent(2)}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-date">Today</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="demo-label">Building Billy</span>
                  </div>
                </div>
                <h3 className="timeline-heading">Building Billy</h3>
                <p className="timeline-description">
                  We're building Billy to help founders get bookkeeping right from Day One, no accounting knowledge, no expensive cleanup later.<br />
                  <br />
                  It's the product we wish we had: set up correctly, capture expenses automatically, stay compliant, and avoid fines, stress, and late-night cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">We help founders set up accounting & bookkeeping correctly from the start,<br />so you stay compliant, organized, and stress-free as you grow.</p>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-header">
                <h3 className="product-title">Start clean</h3>
                <p className="product-description">Set up compliant accounting in minutes, no expertise needed.</p>
              </div>
              <div className="product-visual">
                <div className="image-placeholder">
                  <span className="demo-label">Setup wizard interface</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <h3 className="product-title">Never lose receipts</h3>
                <p className="product-description">Snap, email, or upload—everything captured and stored.</p>
              </div>
              <div className="product-visual">
                <div className="image-placeholder">
                  <span className="demo-label">Receipt photo → transaction</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <h3 className="product-title">Catch issues early</h3>
                <p className="product-description">Auto-match receipts and flag problems early.</p>
              </div>
              <div className="product-visual">
                <div className="image-placeholder">
                  <span className="demo-label">Matched transactions view</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <h3 className="product-title">Track your burn</h3>
                <p className="product-description">Real-time spending and runway tracking.</p>
              </div>
              <div className="product-visual">
                <div className="image-placeholder">
                  <span className="demo-label">Budget & burn dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="section testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-profile">
              <div className="profile-photo">
                <img src="/testimonial-pictures/front-page.png" alt="Rex Ordonez" />
              </div>
              <div className="profile-info">
                <p className="profile-name">Rex Ordonez</p>
                <p className="profile-title">Co-founder @Native</p>
              </div>
            </div>

            <div className="testimonial-headline">
              <h2>We're building the product we wish we had</h2>
            </div>

            <div className="testimonial-body">
              <p>We saved bookkeeping for later. Later cost us time, money, and stress.</p>
              <p>We're building this to make Day 1 setup simple and painless.</p>
              <Link to="/story" className="testimonial-cta">See more</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get It Right From Day One</h2>
          <div className="contact-form">
            <input
              type="email"
              placeholder="What's your work email?"
              className="email-input"
            />
            <button className="cta-button-primary">Founder Signup</button>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
