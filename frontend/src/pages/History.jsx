import { useState } from 'react'

function History() {

  const [historyCleared, setHistoryCleared] = useState(false)

  return (

    <div className="history-page">

      <div className="history-container">

        <div className="history-header">

          <span>
            YOUR ACTIVITY
          </span>

          <h1>
            History
          </h1>

          <p>
            View your recent questions and learning activity.
          </p>

        </div>


        <div className="history-card">

          <div className="history-card-header">

            <h2>
              Recent Activity
            </h2>

            {!historyCleared && (
              <button
                onClick={() => setHistoryCleared(true)}
              >
                Clear History
              </button>
            )}

          </div>


          {/* History Items */}

          {!historyCleared ? (

            <>

              <div className="history-item">

                <div className="history-icon purple">
                  ✦
                </div>

                <div className="history-info">

                  <h3>
                    Explain linked list
                  </h3>

                  <p>
                    Data Structures • Asked to AI
                  </p>

                </div>

                <span className="history-time">
                  Today, 7:42 PM
                </span>

              </div>


              <div className="history-item">

                <div className="history-icon blue">
                  ✦
                </div>

                <div className="history-info">

                  <h3>
                    What is polymorphism?
                  </h3>

                  <p>
                    Java Programming • Asked to AI
                  </p>

                </div>

                <span className="history-time">
                  Today, 5:20 PM
                </span>

              </div>


              <div className="history-item">

                <div className="history-icon orange">
                  ✦
                </div>

                <div className="history-info">

                  <h3>
                    Explain waterfall model
                  </h3>

                  <p>
                    Software Engineering • Asked to AI
                  </p>

                </div>

                <span className="history-time">
                  Yesterday, 8:15 PM
                </span>

              </div>


              <div className="history-item">

                <div className="history-icon green">
                  📚
                </div>

                <div className="history-info">

                  <h3>
                    Opened Data Structures notes
                  </h3>

                  <p>
                    Study Material • Viewed notes
                  </p>

                </div>

                <span className="history-time">
                  Today, 4:10 PM
                </span>

              </div>

            </>

          ) : (

            /* Empty History */

            <div className="empty-history">

              <div className="empty-history-icon">
                🕘
              </div>

              <h3>
                No History
              </h3>

              <p>
                Your recent study activity has been cleared.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  )
}

export default History