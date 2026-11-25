import '../FeaturesPage.css'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'

function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className="features-page">

        <section className="features-hero">
          <div className="features-hero-content">

            <span className="features-badge">
              ✦ STUDYMATE AI
            </span>

            <h1>
              Everything you need
              <br />
              <span>to study smarter.</span>
            </h1>

            <p>
              Your notes, AI assistance, and learning tools,
              all together in one simple space.
            </p>

          </div>
        </section>

        <section className="features-content">
          <div className="container">
            <Features />
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default FeaturesPage