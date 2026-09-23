import DashboardSidebar from '../components/DashboardSidebar'

function Dashboard() {

  return (

    <div className="dashboard-page">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Dashboard Area */}
      <main className="dashboard-main">

        <div className="dashboard-container">

          {/* Top Welcome */}
          <div className="dashboard-welcome">

            <div>

              <span className="dashboard-greeting">
                Good Evening 👋
              </span>

              <h1>
                Welcome back, Bijit
              </h1>

              <p>
                Ready to continue your learning journey?
              </p>

            </div>

            <div className="dashboard-profile">

              <div className="profile-avatar">
                B
              </div>

              <div>
                <strong>Bijit</strong>
                <small>Student</small>
              </div>

            </div>

          </div>


          {/* Statistics */}
          <div className="dashboard-stats">

            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon purple">
                📚
              </div>

              <div>
                <span>Total Notes</span>
                <strong>12</strong>
              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon blue">
                💬
              </div>

              <div>
                <span>Questions Asked</span>
                <strong>48</strong>
              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon green">
                📈
              </div>

              <div>
                <span>Learning Progress</span>
                <strong>78%</strong>
              </div>

            </div>

          </div>


          {/* AI Assistant */}
          <div className="dashboard-ai-card">

            <div className="ai-card-content">

              <div className="ai-card-icon">
                ✦
              </div>

              <div>

                <span>
                  AI STUDY ASSISTANT
                </span>

                <h2>
                  What would you like to learn today?
                </h2>

                <p>
                  Ask questions based on your uploaded
                  study materials.
                </p>

              </div>

            </div>


<div className="dashboard-ai-input">

  <input
    type="text"
    placeholder="Ask something about your notes..."
    id="dashboardQuestion"
  />

    <a
      href="/ask-ai"
      onClick={(e) => {
        const question = document.getElementById('dashboardQuestion').value

        if (question.trim() !== '') {
          e.currentTarget.href =
            `/ask-ai?question=${encodeURIComponent(question)}`
        }
      }}
    >
      Ask AI →
    </a>

  </div>
          </div>


          {/* Recent Notes */}
          <div className="dashboard-section-header">

            <div>

              <span>
                YOUR MATERIALS
              </span>

              <h2>
                Recent Notes
              </h2>

            </div>

            <a href="/notes">
              View All →
            </a>

          </div>


          {/* Clickable Notes */}
          <div className="dashboard-notes">

            <a
              href="/ask-ai?note=Data%20Structures"
              className="dashboard-note-card"
            >

              <div className="note-card-icon purple">
                📕
              </div>

              <div className="note-card-info">

                <h3>
                  Data Structures
                </h3>

                <p>
                  42 pages • Updated today
                </p>

              </div>

              <span className="note-arrow">
                →
              </span>

            </a>


            <a
              href="/ask-ai?note=Java%20Programming"
              className="dashboard-note-card"
            >

              <div className="note-card-icon blue">
                📘
              </div>

              <div className="note-card-info">

                <h3>
                  Java Programming
                </h3>

                <p>
                  35 pages • Updated yesterday
                </p>

              </div>

              <span className="note-arrow">
                →
              </span>

            </a>


            <a
              href="/ask-ai?note=Software%20Engineering"
              className="dashboard-note-card"
            >

              <div className="note-card-icon orange">
                📙
              </div>

              <div className="note-card-info">

                <h3>
                  Software Engineering
                </h3>

                <p>
                  28 pages • Updated 2 days ago
                </p>

              </div>

              <span className="note-arrow">
                →
              </span>

            </a>

          </div>

        </div>

      </main>

    </div>

  )
}

export default Dashboard