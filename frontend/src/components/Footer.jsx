function Footer() {
  return (
    <footer className="studymate-footer">

      <div className="container">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-5">

            <a href="#" className="footer-logo">
              <span>✦</span>
              StudyMate <strong>AI</strong>
            </a>

            <p className="footer-description">
              Your personal AI study assistant designed to help
              you understand your notes, ask questions and learn
              smarter.
            </p>

          </div>

          {/* Product */}
          <div className="col-6 col-lg-2">

            <h4>Product</h4>

            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/ask-ai">Ask AI</a></li>
            </ul>

          </div>

          {/* Resources */}
          <div className="col-6 col-lg-2">

            <h4>Resources</h4>

            <ul>
              <li><a href="/notes">My Notes</a></li>
              <li><a href="/progress">Progress</a></li>
              <li><a href="/history">History</a></li>
              <li><a href="#about">About</a></li>
            </ul>

          </div>

          {/* Account */}
          <div className="col-6 col-lg-2">

            <h4>Account</h4>

            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="footer-bottom">

          <p>
            © 2026 StudyMate AI. All rights reserved.
          </p>

          <p>
            Built with ❤️ for smarter learning.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer