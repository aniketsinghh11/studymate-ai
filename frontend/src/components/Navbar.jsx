import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg studymate-navbar">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand studymate-logo" to="/">
          <span className="logo-icon">✦</span>
          <span>StudyMate</span>
          <span className="logo-ai">AI</span>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav mx-auto">

            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* FEATURES */}
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>

            {/* HOW IT WORKS */}
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">
                How It Works
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

          </ul>

          {/* RIGHT SIDE BUTTONS */}
          <div className="navbar-buttons">

            {/* LOGIN */}
            <Link to="/login" className="login-link">
              Login
            </Link>

            {/* GET STARTED */}
            <Link
              to="/register"
              className="get-started-btn"
            >
              Get Started <span>→</span>
            </Link>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar