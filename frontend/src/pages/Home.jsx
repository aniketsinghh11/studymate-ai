import '../Home.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />

      <main className="sm-home">

        {/* HERO SECTION */}
        <section className="sm-hero">
          <div className="sm-hero-container">

            {/* LEFT CONTENT */}
            <div className="sm-hero-content">

              <span className="sm-badge">
                ✦ Your AI-Powered Study Partner
              </span>

              <h1>
                Study smarter.
                <br />
                <span>Not harder.</span>
              </h1>

              <p>
                Upload your notes, ask anything, and understand your study
                materials better with your personal AI learning assistant.
              </p>

              <div className="sm-hero-buttons">
                <Link to="/register" className="sm-primary-btn">
                  Start Learning Free ↗
                </Link>

                <Link to="/features" className="sm-secondary-btn">
                  Explore Features
                </Link>
              </div>

              <div className="sm-trust-text">
                ✦ Learn from your own notes & study materials
              </div>

            </div>

            {/* RIGHT INFORMATION PANEL */}
            <div className="sm-hero-side">

              <div className="sm-side-heading">
                <span>MADE FOR YOUR STUDIES</span>
                <h2>Your notes.<br />Your questions.<br />Your understanding.</h2>
              </div>

              <div className="sm-side-item">
                <span className="sm-side-number">01</span>
                <div>
                  <h3>Bring your own material</h3>
                  <p>Upload PDFs and use your own study notes.</p>
                </div>
              </div>

              <div className="sm-side-item">
                <span className="sm-side-number">02</span>
                <div>
                  <h3>Ask without hesitation</h3>
                  <p>Ask questions whenever a topic feels confusing.</p>
                </div>
              </div>

              <div className="sm-side-item">
                <span className="sm-side-number">03</span>
                <div>
                  <h3>Understand it your way</h3>
                  <p>Get explanations based on your uploaded materials.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="sm-feature-strip">

          <div className="sm-feature-item">
            <span>📄</span>
            <div>
              <strong>Upload PDFs</strong>
              <small>Your study materials</small>
            </div>
          </div>

          <div className="sm-feature-item">
            <span>🤖</span>
            <div>
              <strong>Ask AI</strong>
              <small>Instant explanations</small>
            </div>
          </div>

          <div className="sm-feature-item">
            <span>🧠</span>
            <div>
              <strong>Understand Better</strong>
              <small>Learn at your own pace</small>
            </div>
          </div>

          <div className="sm-feature-item">
            <span>📚</span>
            <div>
              <strong>Your Materials</strong>
              <small>Answers from your notes</small>
            </div>
          </div>

        </section>

        {/* CTA */}
        <CTA />

      </main>

      <Footer />
    </>
  )
}
export default Home