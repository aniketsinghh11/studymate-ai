```jsx
import '../AboutPage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* ABOUT HERO */}
        <section className="inner-hero">
          <div className="container text-center">

            <span className="hero-badge">
              ✦ About StudyMate AI
            </span>

            <h1>
              Making Learning
              <br />
              <span>Smarter for Everyone.</span>
            </h1>

            <p>
              We believe every student deserves a simpler way
              to understand their study materials.
              StudyMate AI brings your notes and AI assistance
              together in one learning platform.
            </p>

          </div>
        </section>

        {/* ABOUT CONTENT */}
        <section className="about-content-section">
          <div className="container">

            {/* PURPOSE HEADING */}
            <div className="about-purpose-heading">

              <span className="section-badge">
                Our Purpose
              </span>

              <h2>
                Learn with
                <span> Confidence.</span>
              </h2>

              <p>
                StudyMate AI is an AI-powered study assistant designed
                to help students learn more effectively using their own
                study materials.
              </p>

              <p>
                Upload your notes, ask questions about your documents,
                and get answers grounded in the materials you provide.
              </p>

            </div>

            {/* PURPOSE CARDS */}
            <div className="row g-4 about-purpose-cards">

              {/* CARD 1 */}
              <div className="col-md-6">
                <div className="about-highlight-card">

                  <div className="about-highlight-icon">
                    📚
                  </div>

                  <h3>Built Around Your Notes</h3>

                  <p>
                    Your study materials are at the center of your
                    learning experience.
                  </p>

                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-6">
                <div className="about-highlight-card">

                  <div className="about-highlight-icon">
                    🤖
                  </div>

                  <h3>AI-Assisted Learning</h3>

                  <p>
                    Ask questions and explore concepts using your
                    uploaded study documents.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default AboutPage
```