function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">

        {/* SECTION HEADING */}
       

        {/* FEATURE CARDS */}
        <div className="row g-4">

          {/* MY NOTES */}
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

          {/* AI TUTOR */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                🤖
              </div>

              <h3>AI Tutor</h3>

              <p>
                Get simple explanations and understand difficult
                topics more easily using your study materials.
              </p>

              <a href="/ask-ai">
                Meet Your AI Tutor →
              </a>
            </div>
          </div>

          {/* ASK AI */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon green-icon">
                💬
              </div>

              <h3>Ask AI</h3>

              <p>
                Ask questions about your uploaded notes and
                get answers based on your documents.
              </p>

              <a href="/ask-ai">
                Start Asking →
              </a>
            </div>
          </div>

          {/* LEARNING PROGRESS */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                📈
              </div>

              <h3>Progress</h3>

              <p>
                Track your learning activity and monitor
                your study progress.
              </p>

              <a href="/progress">
                View Progress →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;