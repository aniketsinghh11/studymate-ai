function CTA() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <div className="cta-content">

            <span className="cta-badge">
              ✦ Start Learning Today
            </span>

            <h2>
              Ready to Study
              <br />
              <span>Smarter?</span>
            </h2>

            <p>
              Upload your notes, ask questions and understand
              your study material with StudyMate AI.
            </p>

            <div className="cta-buttons">

              <a href="/register" className="btn cta-primary">
                Get Started →
              </a>

              <a href="#features" className="btn cta-secondary">
                Explore Features
              </a>

            </div>

          </div>

          {/* Decorative AI Icon */}

          <div className="cta-decoration">
            <div className="cta-glow">
              ✦
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default CTA