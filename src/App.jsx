import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FinancialDashboard from './components/FinancialDashboard';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <section id="home" className="section home-section">
        <div className="hero-content">
          <div className="trusted-by">
            <p className="trusted-label">Backed by</p>
            <div className="logo-container">
              <img src="/logos/11393250.png" alt="Techstars logo" className="partner-logo techstars-logo" />
              <img src="/logos/USC-Logo.png" alt="USC Logo" className="partner-logo" />
            </div>
          </div>

          <h1>Bookkeeping, set up right from Day 1.</h1>
          <p className="subtitle">For first-time founders who don't know where to start, and don't want fines or cleanup later.</p>

          <div className="hero-cta">
            <button className="cta-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Become a Partner
            </button>
          </div>

          <p className="hero-audience">Early-stage • First-time founders • US startups</p>
        </div>
      </section>

      <section id="testimonial" className="section testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-profile">
              <div className="profile-photo"></div>
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
              <a href="#" className="testimonial-cta">See more</a>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="section problems-section">
        <div className="problems-container">
          <h2 className="problems-headline">Managing accounting is hard.</h2>
          <p className="problems-subheadline">Most founders struggle with:</p>

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
        </div>
      </section>

      <section id="solution" className="section solution-section">
        <div className="solution-container">
          <h3 className="solution-title">What we do?</h3>
          <h2 className="solution-headline">We help founders set up accounting & bookkeeping correctly from the start, so you stay compliant, organized, and stress-free as you grow.</h2>

          <div className="benefits-section">
            <h3 className="benefits-title">Core Benefits</h3>
            <div className="benefits-grid">
              <div className="benefit-box">
                <p>No messy cleanup later</p>
              </div>
              <div className="benefit-box">
                <p>Avoid fines & penalties</p>
              </div>
              <div className="benefit-box">
                <p>Clean books from Day 1</p>
              </div>
              <div className="benefit-box">
                <p>Founder peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How It Works</h2>

          <div className="features-list">
            {/* Feature 1 - Text Left, Image Right */}
            <div className="feature-row">
              <div className="feature-text">
                <span className="step-label">Step 1</span>
                <h3 className="feature-heading">Set up & capture, in clicks</h3>
                <p className="feature-description">No accounting knowledge needed. Set up your books in minutes. Capture expenses instantly via photo, email, or upload—everything goes straight into your system.</p>
              </div>
              <div className="feature-image">
                <div className="image-placeholder">
                  <span className="demo-label">Receipt photo → transaction</span>
                </div>
              </div>
            </div>

            {/* Feature 2 - Image Left, Text Right */}
            <div className="feature-row">
              <div className="feature-image">
                <div className="image-placeholder">
                  <span className="demo-label">Transaction list with matched/missing receipt states</span>
                </div>
              </div>
              <div className="feature-text">
                <span className="step-label">Step 2</span>
                <h3 className="feature-heading">Auto-reconcile & stay compliant</h3>
                <p className="feature-description">We catch what founders miss. Receipts automatically match to transactions. Missing or mismatched items are flagged before they become problems.</p>
              </div>
            </div>

            {/* Feature 3 - Text Left, Image Right */}
            <div className="feature-row">
              <div className="feature-text">
                <span className="step-label">Step 3</span>
                <h3 className="feature-heading">Know where your money goes</h3>
                <p className="feature-description">Built for startups, not accountants. Spending is structured correctly from Day 1. Track budget and burn so you always know your financial position.</p>
              </div>
              <div className="feature-image">
                <div className="image-placeholder">
                  <span className="demo-label">Spend-by-category + burn overview dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Help us build this with founders.</h2>
          <div className="contact-content">
            <p className="benefits-intro">Get: Early access, Founder pricing, Direct input on the product</p>
            <button className="cta-button">Become a Design Partner</button>
            <p className="cta-disclaimer">Limited spots • No obligation</p>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}

export default App;
