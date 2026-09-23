import Navbar from '../components/Navbar'
import DashboardPreview from '../components/DashboardPreview'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>

        {/* HERO */}
        <section className="hero-section">

          <div className="container">

            <div className="row align-items-center">

              {/* LEFT SIDE */}
              <div className="col-lg-6">

                <span className="hero-badge">
                  ✦ AI-Powered Learning
                </span>

                <h1>
                  Study Smarter.
                  <br />
                  <span>Understand Faster.</span>
                </h1>

                <p className="hero-description">
                  Your personal AI study partner that helps you
                  understand your notes, ask questions and learn
                  more effectively.
                </p>

                <div className="hero-buttons">

                  <a
                    href="/register"
                    className="btn primary-btn"
                  >
                    Start Learning →
                  </a>

                  <a
                    href="#features"
                    className="btn secondary-btn"
                  >
                    Explore Features
                  </a>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6">

                <DashboardPreview />

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <Features />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FINAL CTA */}
        <CTA />

      </main>

      {/* FOOTER MUST BE LAST */}
      <Footer />

    </>
  )
}

export default Home