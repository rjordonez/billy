import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <section id="home" className="section home-section">
        <div className="hero-content">
          <h1>Accounting Made Simple for Founders</h1>
          <p className="subtitle">Track expenses, validate invoices, and stay compliant—automatically.</p>

          <div className="hero-cta">
            <button className="cta-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Request Early Access
            </button>
            <a href="#features" className="cta-secondary">See how it works →</a>
          </div>

          <div className="hero-trust">
            <div className="trust-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="trust-text">Trusted by 500+ founders</p>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="bento-grid">
          <div className="bento-card">
            <div className="card-content">
              <h3>Know if an invoice is valid</h3>
              <p>Instantly see if an invoice is missing a receipt or payment</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup invoice-mockup"></div>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <h3>Get reimbursed faster</h3>
              <p>Submit expenses in one click with automatic approval</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup reimburse-mockup"></div>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <h3>Save founder time</h3>
              <p>No accountant needed—expenses are tracked automatically</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup time-mockup"></div>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <h3>Auto-categorize expenses</h3>
              <p>We automatically label expenses and learn from patterns</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup category-mockup"></div>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <h3>Understand & control spending</h3>
              <p>Simple budget overview—see what you're overspending on</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup spending-mockup"></div>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <h3>No more copy-paste</h3>
              <p>Upload once, done forever—data flows everywhere automatically</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
            <div className="card-visual">
              <div className="mockup automation-mockup"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="section timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <p className="timeline-eyebrow">Switching doesn't have to be painful</p>
            <h2>Here's what 30 days with Billy looks like.</h2>
          </div>

          <div className="timeline-bar-wrapper">
            <div className="timeline-bar"></div>
            <div className="timeline-markers">
              <div className="timeline-marker">
                <div className="marker-badge">Day 1</div>
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-marker">
                <div className="marker-badge">Day 5</div>
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-marker">
                <div className="marker-badge">Day 30</div>
                <div className="marker-dot highlight"></div>
              </div>
            </div>
          </div>

          <div className="timeline-cards">
            <div className="timeline-card">
              <h3>Just getting started</h3>
              <ul className="timeline-list">
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Paying with your own card
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Receipts everywhere
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No idea what's "valid"
                </li>
              </ul>
            </div>

            <div className="timeline-card">
              <h3>Getting control</h3>
              <ul className="timeline-list">
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Expenses auto-captured
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Receipts checked for you
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Less manual work
                </li>
              </ul>
            </div>

            <div className="timeline-card">
              <h3>Fully set</h3>
              <ul className="timeline-list">
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All spend in one place
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast reimbursements
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Clear view of your budget
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <h2>Get Started</h2>
          <p>Ready to simplify your accounting?</p>
          <form className="contact-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Request Early Access</button>
          </form>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}

export default App;
