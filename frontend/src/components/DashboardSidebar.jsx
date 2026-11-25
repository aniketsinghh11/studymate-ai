import { Link, useLocation, useNavigate } from 'react-router-dom'

function DashboardSidebar() {

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem('studymateLoggedIn')

    navigate('/login')
  }

  return (

    <aside className="dashboard-sidebar">

      <div className="sidebar-logo">

        <span>✦</span>

        StudyMate <strong>AI</strong>

      </div>


      <div className="sidebar-section">

        <p className="sidebar-label">
          MAIN MENU
        </p>


        <nav className="sidebar-nav">

          <Link
            to="/dashboard"
            className={`sidebar-link ${
              location.pathname === '/dashboard' ? 'active' : ''
            }`}
          >
            <span className="sidebar-icon">⌂</span>
            <span>Dashboard</span>
          </Link>


          <Link
            to="/notes"
            className={`sidebar-link ${
              location.pathname === '/notes' ? 'active' : ''
            }`}
          >
            <span className="sidebar-icon">📚</span>
            <span>My Notes</span>
          </Link>


          <Link
            to="/ask-ai"
            className={`sidebar-link ${
              location.pathname === '/ask-ai' ? 'active' : ''
            }`}
          >
            <span className="sidebar-icon">✦</span>
            <span>Ask AI</span>
          </Link>


          <Link
            to="/progress"
            className={`sidebar-link ${
              location.pathname === '/progress' ? 'active' : ''
            }`}
          >
            <span className="sidebar-icon">📈</span>
            <span>Progress</span>
          </Link>


          <Link
            to="/history"
            className={`sidebar-link ${
              location.pathname === '/history' ? 'active' : ''
            }`}
          >
            <span className="sidebar-icon">🕘</span>
            <span>History</span>
          </Link>

        </nav>

      </div>


      <div className="sidebar-bottom">

        <button
          onClick={handleLogout}
          className="sidebar-link logout-link"
        >
          <span className="sidebar-icon">↪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>

  )
}

export default DashboardSidebar