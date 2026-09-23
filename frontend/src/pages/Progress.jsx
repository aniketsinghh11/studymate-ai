function Progress() {
  return (
    <div className="progress-page">

      <div className="progress-container">

        <div className="progress-header">
          <span>YOUR LEARNING JOURNEY</span>

          <h1>Progress</h1>

          <p>
            Track your learning activity and see your improvement.
          </p>
        </div>

        <div className="progress-overview">

          <div className="overall-progress">
            <span>OVERALL PROGRESS</span>

            <strong>78%</strong>

            <p>Keep going! You're doing great.</p>
          </div>

          <div className="progress-stat">
            <span>📚</span>
            <strong>12</strong>
            <small>Notes Studied</small>
          </div>

          <div className="progress-stat">
            <span>💬</span>
            <strong>48</strong>
            <small>Questions Asked</small>
          </div>

          <div className="progress-stat">
            <span>⏱</span>
            <strong>24h</strong>
            <small>Study Time</small>
          </div>

        </div>

        <div className="subject-progress">

          <div className="progress-section-title">
            <span>SUBJECT PERFORMANCE</span>
            <h2>Subject Progress</h2>
          </div>

          <div className="subject-item">

            <div className="subject-info">
              <strong>Data Structures</strong>
              <span>80%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '80%' }}></div>
            </div>

          </div>

          <div className="subject-item">

            <div className="subject-info">
              <strong>Java Programming</strong>
              <span>70%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>

          </div>

          <div className="subject-item">

            <div className="subject-info">
              <strong>Software Engineering</strong>
              <span>90%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '90%' }}></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Progress