function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">

      <div className="container">

        {/* Heading */}
        <div className="how-heading">

          <span className="section-badge">
            ✦ Simple & Powerful
          </span>

          <h2>
            How <span>StudyMate AI</span> Works
          </h2>

          <p>
            Start learning in just a few simple steps.
            StudyMate AI keeps your study process simple and organized.
          </p>

        </div>

        {/* Steps */}
        <div className="row g-4">

          {/* Step 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                📄
              </div>

              <h3>Upload Notes</h3>

              <p>
                Upload your study notes or PDF materials
                to StudyMate AI.
              </p>

            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                🤖
              </div>

              <h3>Ask AI</h3>

              <p>
                Ask questions about the material you
                have uploaded.
              </p>

            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                💡
              </div>

              <h3>Understand</h3>

              <p>
                Get simple explanations based on your
                own study materials.
              </p>

            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card">

              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                📈
              </div>

              <h3>Track Progress</h3>

              <p>
                Monitor your learning activity and
                improve your preparation.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks