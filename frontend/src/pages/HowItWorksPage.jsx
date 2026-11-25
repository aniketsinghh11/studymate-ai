import '../HowItWorksPage.css'
import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main className="how-it-works-page">

        {/* PAGE HERO */}
        <section className="inner-hero">
          <div className="container text-center">

            <span className="hero-badge">
              ✦ Simple. Smart. Effective.
            </span>

            <h1>
              Your Learning Journey,
              <br />
              <span>Simplified with AI.</span>
            </h1>

            <p>
              StudyMate AI makes studying easier.
              Follow a simple process to upload your notes,
              ask questions, and learn from your own materials.
            </p>

          </div>
        </section>

        {/* HOW IT WORKS CONTENT */}
        <HowItWorks />

      </main>

      <Footer />
    </>
  )
}

export default HowItWorksPage