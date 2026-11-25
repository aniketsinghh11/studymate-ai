import { useEffect, useState } from 'react'

import {
  Link,
  useNavigate
} from 'react-router-dom'

import DashboardSidebar from '../components/DashboardSidebar'


function History() {

  const navigate = useNavigate()

  const [history, setHistory] = useState([])


  // =========================================
  // LOAD HISTORY
  // =========================================

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem(
        'studymateLoggedIn'
      )


    if (isLoggedIn !== 'true') {

      navigate(
        '/login',
        { replace: true }
      )

      return

    }


    loadHistory()


    // Listen for new questions
    window.addEventListener(
      'studymateHistoryChanged',
      loadHistory
    )


    return () => {

      window.removeEventListener(
        'studymateHistoryChanged',
        loadHistory
      )

    }

  }, [navigate])


  // =========================================
  // LOAD FROM LOCAL STORAGE
  // =========================================

  const loadHistory = () => {

    const savedHistory =
      localStorage.getItem(
        'studymateHistory'
      )


    if (!savedHistory) {

      setHistory([])

      return

    }


    try {

      const parsedHistory =
        JSON.parse(savedHistory)


      if (Array.isArray(parsedHistory)) {

        setHistory(
          parsedHistory
            .slice()
            .reverse()
        )

      } else {

        setHistory([])

      }

    } catch (error) {

      console.log(
        'Could not load history:',
        error
      )

      setHistory([])

    }

  }


  // =========================================
  // CLEAR HISTORY
  // =========================================

  const clearHistory = () => {

    if (history.length === 0) {
      return
    }


    const confirmClear =
      window.confirm(
        'Are you sure you want to clear your question history?'
      )


    if (!confirmClear) {
      return
    }


    localStorage.removeItem(
      'studymateHistory'
    )


    setHistory([])


    window.dispatchEvent(
      new Event(
        'studymateHistoryChanged'
      )
    )

  }


  // =========================================
  // FORMAT TIME
  // =========================================

  const formatTime = (time) => {

    if (!time) {
      return 'Recently'
    }


    const date =
      new Date(time)


    if (Number.isNaN(
      date.getTime()
    )) {

      return 'Recently'

    }


    return date.toLocaleString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }
    )

  }


  // =========================================
  // PAGE
  // =========================================

  return (

    <div className="history-page">

      <DashboardSidebar />


      <main>

        <div className="history-container">


          {/* =================================
              HEADER
          ================================= */}

          <div className="history-header">

            <span>
              AI ACTIVITY
            </span>


            <h1>
              Question History
            </h1>


            <p>
              View your previous questions and
              continue learning from your study materials.
            </p>

          </div>


          {/* =================================
              HISTORY CARD
          ================================= */}

          <div className="history-card">


            {/* CARD HEADER */}

            <div className="history-card-header">

              <div>

                <h2>
                  Recent Questions
                </h2>

              </div>


              <button
                onClick={clearHistory}
                disabled={
                  history.length === 0
                }
              >
                🗑 Clear History
              </button>

            </div>


            {/* =================================
                HISTORY ITEMS
            ================================= */}

            {history.length > 0 ? (

              history.map(
                (item, index) => (

                  <Link
                    key={
                      item.id || index
                    }

                    to={`/ask-ai?question=${encodeURIComponent(
                      item.question
                    )}${
                      item.note
                        ? `&note=${encodeURIComponent(
                            item.note
                          )}`
                        : ''
                    }`}

                    className="history-item"
                    style={{
                      textDecoration: 'none'
                    }}
                  >


                    {/* ICON */}

                    <div
                      className={`history-icon ${
                        index % 3 === 0
                          ? 'purple'
                          : index % 3 === 1
                          ? 'blue'
                          : 'orange'
                      }`}
                    >
                      ✦
                    </div>


                    {/* QUESTION */}

                    <div className="history-info">

                      <h3>
                        {item.question}
                      </h3>


                      <p>
                        📚{' '}
                        {item.note ||
                          'Study Materials'}
                      </p>

                    </div>


                    {/* TIME */}

                    <span className="history-time">
                      {formatTime(
                        item.time
                      )}
                    </span>


                    {/* ARROW */}

                    <span
                      style={{
                        color: '#635bff',
                        fontSize: '18px'
                      }}
                    >
                      →
                    </span>

                  </Link>

                )
              )

            ) : (


              /* =================================
                 EMPTY STATE
              ================================= */

              <div
                style={{
                  padding: '60px 25px',
                  textAlign: 'center'
                }}
              >

                <div
                  style={{
                    width: '55px',
                    height: '55px',
                    margin: '0 auto 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px',
                    background: '#eeecff',
                    color: '#635bff',
                    fontSize: '22px'
                  }}
                >
                  ✦
                </div>


                <h3
                  style={{
                    margin: '0 0 7px',
                    color: '#111827',
                    fontSize: '17px'
                  }}
                >
                  No questions yet
                </h3>


                <p
                  style={{
                    margin: '0 0 20px',
                    color: '#94a3b8',
                    fontSize: '12px'
                  }}
                >
                  Start asking questions to build
                  your AI learning history.
                </p>


                <Link
                  to="/ask-ai"
                  style={{
                    display: 'inline-block',
                    padding: '10px 17px',
                    borderRadius: '9px',
                    background: '#635bff',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '700',
                    textDecoration: 'none'
                  }}
                >
                  Ask AI →
                </Link>

              </div>

            )}

          </div>


          {/* =================================
              BACK TO DASHBOARD
          ================================= */}

          <div
            style={{
              marginTop: '20px'
            }}
          >

            <Link
              to="/dashboard"
              style={{
                color: '#635bff',
                fontSize: '12px',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              ← Back to Dashboard
            </Link>

          </div>

        </div>

      </main>

    </div>

  )

}


export default History