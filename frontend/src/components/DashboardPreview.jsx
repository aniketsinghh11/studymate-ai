function DashboardPreview() {
  return (
    <div className="dashboard-preview">

      {/* Top Bar */}
      <div className="preview-topbar">
        <div className="preview-brand">
          <span>✦</span>
          StudyMate AI
        </div>

        <div className="online-status">
          <span></span>
          Online
        </div>
      </div>


      {/* Dashboard Content */}
      <div className="preview-content">

        <div className="preview-welcome">
          <h3>Good Evening, Bijit 👋</h3>
          <p>Ready to continue learning?</p>
        </div>


        {/* Statistics */}
        <div className="preview-stats">

          <div className="preview-stat">
            <div className="stat-icon purple">📚</div>
            <div>
              <strong>12</strong>
              <small>Notes</small>
            </div>
          </div>

          <div className="preview-stat">
            <div className="stat-icon blue">💬</div>
            <div>
              <strong>48</strong>
              <small>Questions</small>
            </div>
          </div>

          <div className="preview-stat">
            <div className="stat-icon green">📈</div>
            <div>
              <strong>78%</strong>
              <small>Progress</small>
            </div>
          </div>

        </div>


        {/* AI Assistant */}
        <div className="ai-assistant">

          <div className="assistant-title">
            <div className="assistant-icon">✦</div>

            <div>
              <h4>Ask your AI Assistant</h4>
              <p>Ask anything about your study material</p>
            </div>
          </div>

                <a href="/ask-ai" className="assistant-input">
        <span>Explain a topic from my notes...</span>
        <button>➜</button>
        </a>

        </div>


        {/* Recent Notes */}
        <div className="recent-notes">

          <div className="recent-header">
            <h4>Recent Notes</h4>
            <span>View all →</span>
          </div>


          <div className="note-item">
            <div className="note-left">
              <div className="note-icon physics">📕</div>

              <div>
                <strong>Data Structures</strong>
                <small>42 pages • Updated today</small>
              </div>
            </div>

            <span className="arrow">→</span>
          </div>


          <div className="note-item">
            <div className="note-left">
              <div className="note-icon java">📘</div>

              <div>
                <strong>Java Programming</strong>
                <small>35 pages • Updated yesterday</small>
              </div>
            </div>

            <span className="arrow">→</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default DashboardPreview