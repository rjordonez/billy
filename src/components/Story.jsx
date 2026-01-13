import React from 'react';
import './Story.css';

function Story() {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="story-page">
      <div className="story-container">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <div className="story-header">
          <div className="story-image">
            <img src="/testimonial-pictures/inside-page.jpeg" alt="Rex Ordonez" />
          </div>
          <h1 className="story-title">Our story</h1>
        </div>

        <div className="story-content">
          <section className="story-section">
            <p className="story-intro">We're Jessie and Rex. First-time founders. Techstars-backed.</p>
            <p>When we raised venture funding for the first time, we did what most founders do. We focused on building the product, finding PMF, and getting it into users' hands.</p>
            <p>Everything else felt secondary.</p>
          </section>

          <section className="story-section">
            <h2>What we didn't realize</h2>
            <p>There was a lot we didn't fully understand:</p>
            <ul>
              <li>Accounting</li>
              <li>Bookkeeping</li>
              <li>Payroll taxes</li>
              <li>State registrations</li>
              <li>Workers' comp</li>
            </ul>
            <p>When we looked for help, the options felt overwhelming. Some were expensive. Others assumed we already knew what to ask.</p>
            <p className="story-emphasis">We didn't know where to start, or who to trust.</p>
            <p>So we handled it ourselves with minimal time and spend. Just enough to keep moving.</p>
          </section>

          <section className="story-section">
            <h2>When it caught up with us</h2>
            <p>Then tax season came.</p>
            <p>Our books weren't set up properly. Payroll taxes were mishandled. Deadlines were missed. Penalties showed up.</p>
            <p>Nothing was hard. It was just confusing, scattered everywhere, and easy to mess up.</p>
            <p className="story-emphasis">And by the time we noticed, it was expensive to fix.</p>
          </section>

          <section className="story-section">
            <h2>The pattern we kept seeing</h2>
            <p>As we talked to other founders, we heard the same thing again and again.</p>
            <p className="story-quote">"I didn't know how to get started."</p>
            <p className="story-quote">"I didn't know who to trust."</p>
            <p className="story-quote">"I thought I could fix it later."</p>
            <p className="story-emphasis">Later is when it becomes painful.</p>
          </section>

          <section className="story-section">
            <h2>Why we're building Billy</h2>
            <p>We're building the product we wish we had in our first year.</p>
            <p>Something that helps founders:</p>
            <ul>
              <li>Get started without needing accounting knowledge</li>
              <li>Set up everything correctly from Day 1</li>
              <li>Capture expenses without thinking about it</li>
              <li>Stay compliant without hiring an expensive team</li>
              <li>Avoid fines, stress, and late-night cleanup</li>
            </ul>
            <p className="story-closing">If you're early and unsure where to start, we built this for you.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Story;
