function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg studymate-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand studymate-logo" href="#">
          <span className="logo-icon">✦</span>
          StudyMate <span>AI</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">
                How It Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

          </ul>

          {/* Right buttons */}
          <div className="navbar-buttons">

            <a href="/login" className="login-link">
              Login
            </a>

            <a href="/register" className="btn get-started-btn">
              Get Started
            </a>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar