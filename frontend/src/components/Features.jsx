function Features() {
  return (
    <section className="features-section" id="features">

      <div className="container">

        <div className="features-heading">

          <span className="section-badge">
            ✦ Powerful Learning Tools
          </span>

          <h2>
            Everything You Need
            <br />
            <span>To Study Smarter</span>
          </h2>

          <p>
            StudyMate AI brings your notes, AI assistance and
            learning progress together in one simple platform.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon purple-icon">
                📚
              </div>

              <h3>My Notes</h3>

              <p>
                Keep your study materials organized in one
                convenient place.
              </p>

              <a href="/notes">
                Explore Notes →
              </a>
            </div>
          </div>


          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                🤖
              </div>

              <h3>AI Tutor</h3>

              <p>
                Get simple explanations and understand difficult
                topics more easily.
              </p>

              <a href="/ask-ai">
                Ask AI →
              </a>
            </div>
          </div>


          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon green-icon">
                💬
              </div>

              <h3>Ask AI</h3>

              <p>
                Ask questions about your study materials and
                get helpful answers.
              </p>

              <a href="/ask-ai">
                Start Asking →
              </a>
            </div>
          </div>


          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                📈
              </div>

              <h3>Progress</h3>

              <p>
                Track your learning activity and see how your
                preparation is improving.
              </p>

              <a href="/progress">
                View Progress →
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Features