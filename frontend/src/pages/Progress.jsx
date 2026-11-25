import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardSidebar from '../components/DashboardSidebar'

function Progress() {

  const navigate = useNavigate()

  const [history, setHistory] = useState([])

  const [progress, setProgress] = useState(78)


  // =========================================
  // CHECK LOGIN + LOAD DATA
  // =========================================

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem('studymateLoggedIn')

    if (isLoggedIn !== 'true') {

      navigate('/login', {
        replace: true
      })

      return
    }

    loadData()

    window.addEventListener(
      'studymateHistoryChanged',
      loadData
    )

    return () => {

      window.removeEventListener(
        'studymateHistoryChanged',
        loadData
      )

    }

  }, [navigate])


  // =========================================
  // LOAD HISTORY
  // =========================================

  const loadData = () => {

    const savedHistory =
      localStorage.getItem(
        'studymateHistory'
      )

    if (!savedHistory) {

      setHistory([])

      return

    }

    try {

      const parsed =
        JSON.parse(savedHistory)

      if (Array.isArray(parsed)) {

        setHistory(parsed)

      }

    } catch (error) {

      console.log(
        'Could not load history:',
        error
      )

    }

  }


  // =========================================
  // PAGE
  // =========================================

  return (

    <div className="progress-page">

      <DashboardSidebar />


      <main>

        <div className="progress-container">


          {/* =================================
              HEADER
          ================================= */}

          <div className="progress-header">

            <span>
              LEARNING ANALYTICS
            </span>

            <h1>
              Your Progress
            </h1>

            <p>
              Track your learning activity
              and study progress.
            </p>

          </div>


          {/* =================================
              OVERVIEW
          ================================= */}

          <div className="progress-overview">


            <div className="progress-overview-card">

              <div className="progress-overview-icon purple">
                ✦
              </div>

              <div>

                <span>
                  OVERALL PROGRESS
                </span>

                <strong>
                  {progress}%
                </strong>

              </div>

            </div>


            <div className="progress-overview-card">

              <div className="progress-overview-icon blue">
                💬
              </div>

              <div>

                <span>
                  QUESTIONS ASKED
                </span>

                <strong>
                  {history.length}
                </strong>

              </div>

            </div>


            <div className="progress-overview-card">

              <div className="progress-overview-icon green">
                📚
              </div>

              <div>

                <span>
                  STUDY SESSIONS
                </span>

                <strong>
                  {history.length > 0 ? history.length : 0}
                </strong>

              </div>

            </div>

          </div>


          {/* =================================
              OVERALL PROGRESS
          ================================= */}

          <section className="overall-progress-card">

            <div className="overall-progress-header">

              <div>

                <span>
                  OVERALL LEARNING
                </span>

                <h2>
                  Keep Going! 🚀
                </h2>

                <p>
                  You're making progress.
                  Keep asking questions and
                  reviewing your study materials.
                </p>

              </div>


              <div className="overall-progress-number">
                {progress}%
              </div>

            </div>


            <div className="progress-bar">

              <div
                className="progress-bar-fill"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>

          </section>


          {/* =================================
              SUBJECT PROGRESS
          ================================= */}

          <section className="subject-progress-section">

            <div className="section-heading">

              <div>

                <span>
                  SUBJECT BREAKDOWN
                </span>

                <h2>
                  Subject Progress
                </h2>

              </div>

            </div>


            <div className="subject-progress-list">


              {/* DATA STRUCTURES */}

              <div className="subject-progress-card">

                <div className="subject-progress-top">

                  <div className="subject-name">

                    <div className="subject-icon purple">
                      📚
                    </div>

                    <div>

                      <h3>
                        Data Structures
                      </h3>

                      <p>
                        Study material
                      </p>

                    </div>

                  </div>

                  <strong>
                    85%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill purple"
                    style={{
                      width: '85%'
                    }}
                  ></div>

                </div>

              </div>


              {/* JAVA */}

              <div className="subject-progress-card">

                <div className="subject-progress-top">

                  <div className="subject-name">

                    <div className="subject-icon blue">
                      ☕
                    </div>

                    <div>

                      <h3>
                        Java Programming
                      </h3>

                      <p>
                        Study material
                      </p>

                    </div>

                  </div>

                  <strong>
                    72%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill blue"
                    style={{
                      width: '72%'
                    }}
                  ></div>

                </div>

              </div>


              {/* SOFTWARE ENGINEERING */}

              <div className="subject-progress-card">

                <div className="subject-progress-top">

                  <div className="subject-name">

                    <div className="subject-icon orange">
                      💻
                    </div>

                    <div>

                      <h3>
                        Software Engineering
                      </h3>

                      <p>
                        Study material
                      </p>

                    </div>

                  </div>

                  <strong>
                    68%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill orange"
                    style={{
                      width: '68%'
                    }}
                  ></div>

                </div>

              </div>


              {/* COMPUTER NETWORKS */}

              <div className="subject-progress-card">

                <div className="subject-progress-top">

                  <div className="subject-name">

                    <div className="subject-icon green">
                      🌐
                    </div>

                    <div>

                      <h3>
                        Computer Networks
                      </h3>

                      <p>
                        Study material
                      </p>

                    </div>

                  </div>

                  <strong>
                    60%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill green"
                    style={{
                      width: '60%'
                    }}
                  ></div>

                </div>

              </div>

            </div>

          </section>


          {/* =================================
              QUICK ACTIONS
          ================================= */}

          <section className="progress-actions">

            <Link
              to="/ask-ai"
              className="progress-action-card"
            >

              <div>
                ✦
              </div>

              <span>
                Ask AI
              </span>

              <small>
                Continue learning
              </small>

              <strong>
                →
              </strong>

            </Link>


            <Link
              to="/notes"
              className="progress-action-card"
            >

              <div>
                📚
              </div>

              <span>
                My Notes
              </span>

              <small>
                Review your materials
              </small>

              <strong>
                →
              </strong>

            </Link>


            <Link
              to="/history"
              className="progress-action-card"
            >

              <div>
                🕘
              </div>

              <span>
                History
              </span>

              <small>
                View your questions
              </small>

              <strong>
                →
              </strong>

            </Link>

          </section>


        </div>

      </main>

    </div>

  )

}

export default Progress