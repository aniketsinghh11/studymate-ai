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

            <div className="row align-items-center g-5">

              <div className="col-lg-6">
                <div className="about-content-card">

                  <span className="section-badge">
                    Our Purpose
                  </span>

                  <h2>
                    Learn with
                    <span> Confidence.</span>
                  </h2>

                  <p>
                    StudyMate AI is an AI-powered study assistant
                    designed to help students learn more effectively
                    using their own study materials.
                  </p>

                  <p>
                    Upload your notes, ask questions about your
                    documents, and get answers grounded in the
                    materials you provide.
                  </p>

                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-highlight-card">

                  <div className="about-highlight-icon">
                    📚
                  </div>

                  <h3>
                    Built Around Your Notes
                  </h3>

                  <p>
                    Your study materials are at the center of
                    your learning experience.
                  </p>

                  <div className="about-highlight-icon">
                    🤖
                  </div>

                  <h3>
                    AI-Assisted Learning
                  </h3>

                  <p>
                    Ask questions and explore concepts using
                    your uploaded study documents.
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