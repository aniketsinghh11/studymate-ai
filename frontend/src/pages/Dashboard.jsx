import { useEffect, useState } from 'react'

import {
  useLocation,
  useNavigate,
  Link
} from 'react-router-dom'

import DashboardSidebar from '../components/DashboardSidebar'


function Dashboard() {

  const navigate = useNavigate()

  const location = useLocation()


  // ================================
  // STATES
  // ================================

  const [isChecking, setIsChecking] =
    useState(true)

  const [userName, setUserName] =
    useState('Student')

  const [uploadedFiles, setUploadedFiles] =
    useState([])

  const [totalNotes, setTotalNotes] =
    useState(3)

  const [totalQuestions, setTotalQuestions] =
    useState(0)

  const [recentQuestions, setRecentQuestions] =
    useState([])


  // ================================
  // LOAD DASHBOARD DATA
  // ================================

  useEffect(() => {

    const loadDashboardData = () => {

      // ================================
      // CHECK LOGIN
      // ================================

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


      // ================================
      // GET USER NAME
      // ================================

      const savedName =
        localStorage.getItem(
          'studymateName'
        )


      setUserName(
        savedName || 'Student'
      )


      // ================================
      // GET USER EMAIL
      // ================================

      const userEmail =
        localStorage.getItem(
          'studymateEmail'
        ) || 'guest'


      // ================================
      // GET UPLOADED PDF FILES
      // ================================

      const fileStorageKey =
        `studymateFiles_${userEmail}`

      const savedFiles =
        localStorage.getItem(
          fileStorageKey
        )


      let currentFiles = []


      if (savedFiles) {

        try {

          const files =
            JSON.parse(savedFiles)


          if (Array.isArray(files)) {

            currentFiles = files

          }

        } catch (error) {

          console.log(
            'Could not load uploaded files:',
            error
          )

        }

      }


      setUploadedFiles(
        currentFiles
      )


      // ================================
      // TOTAL NOTES
      // ================================

      setTotalNotes(
        3 + currentFiles.length
      )


      // ================================
      // GET QUESTION HISTORY
      // ================================

      const savedHistory =
        localStorage.getItem(
          'studymateHistory'
        )


      let currentHistory = []


      if (savedHistory) {

        try {

          const history =
            JSON.parse(savedHistory)


          if (Array.isArray(history)) {

            currentHistory = history

          }

        } catch (error) {

          console.log(
            'Could not load question history:',
            error
          )

        }

      }


      // ================================
      // TOTAL QUESTIONS
      // ================================

      setTotalQuestions(
        currentHistory.length
      )


      // ================================
      // RECENT QUESTIONS
      // ================================

      setRecentQuestions(
        currentHistory
          .slice(-4)
          .reverse()
      )


      // ================================
      // FINISHED
      // ================================

      setIsChecking(false)

    }


    // ================================
    // LOAD DATA
    // ================================

    loadDashboardData()


    // ================================
    // PDF CHANGE EVENT
    // ================================

    window.addEventListener(
      'studymateFilesChanged',
      loadDashboardData
    )


    // ================================
    // QUESTION CHANGE EVENT
    // ================================

    window.addEventListener(
      'studymateHistoryChanged',
      loadDashboardData
    )


    // ================================
    // CLEANUP
    // ================================

    return () => {

      window.removeEventListener(
        'studymateFilesChanged',
        loadDashboardData
      )


      window.removeEventListener(
        'studymateHistoryChanged',
        loadDashboardData
      )

    }

  }, [
    navigate,
    location
  ])


  // ================================
  // LOADING
  // ================================

  if (isChecking) {
    return null
  }


  // ================================
  // USER INITIAL
  // ================================

  const userInitial =
    userName
      .charAt(0)
      .toUpperCase()


  // ================================
  // DASHBOARD
  // ================================

  return (

    <div className="dashboard-page">


      {/* ================================
          SIDEBAR
      ================================= */}

      <DashboardSidebar />


      {/* ================================
          MAIN DASHBOARD
      ================================= */}

      <main className="dashboard-main">

        <div className="dashboard-container">


          {/* ================================
              WELCOME
          ================================= */}

          <div className="dashboard-welcome">

            <div>

              <span className="dashboard-greeting">
                Good Evening 👋
              </span>


              <h1>
                Welcome back, {userName}
              </h1>


              <p>
                Ready to continue your learning journey?
              </p>

            </div>


            {/* PROFILE */}

            <div className="dashboard-profile">

              <div className="profile-avatar">
                {userInitial}
              </div>


              <div>

                <strong>
                  {userName}
                </strong>

                <small>
                  Student
                </small>

              </div>

            </div>

          </div>


          {/* ================================
              STATISTICS
          ================================= */}

          <div className="dashboard-stats">


            {/* TOTAL NOTES */}

            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon purple">
                📚
              </div>


              <div>

                <span>
                  Total Notes
                </span>

                <strong>
                  {totalNotes}
                </strong>

              </div>

            </div>


            {/* QUESTIONS ASKED */}

            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon blue">
                💬
              </div>


              <div>

                <span>
                  Questions Asked
                </span>

                <strong>
                  {totalQuestions}
                </strong>

              </div>

            </div>


            {/* LEARNING PROGRESS */}

            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon green">
                📈
              </div>


              <div>

                <span>
                  Learning Progress
                </span>

                <strong>
                  78%
                </strong>

              </div>

            </div>

          </div>


          {/* ================================
              AI ASSISTANT
          ================================= */}

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


            {/* AI INPUT */}

            <div className="dashboard-ai-input">

              <input
                type="text"
                placeholder="Ask something about your notes..."
                id="dashboardQuestion"
              />


              <Link
                to="/ask-ai"

                onClick={(e) => {

                  const input =
                    document.getElementById(
                      'dashboardQuestion'
                    )


                  const question =
                    input
                      ? input.value.trim()
                      : ''


                  if (question !== '') {

                    e.currentTarget.href =
                      `/ask-ai?question=${encodeURIComponent(
                        question
                      )}`

                  }

                }}
              >
                Ask AI →
              </Link>

            </div>

          </div>


          {/* ================================
              RECENT NOTES
          ================================= */}

          <div className="dashboard-section-header">

            <div>

              <span>
                YOUR MATERIALS
              </span>


              <h2>
                Recent Notes
              </h2>

            </div>


            <Link to="/notes">
              View All →
            </Link>

          </div>


          <div className="dashboard-notes">


            {/* ================================
                UPLOADED PDFs
            ================================= */}

            {uploadedFiles
              .slice(-3)
              .reverse()
              .map((file) => (

                <Link
                  key={file.id}
                  to={`/ask-ai?note=${encodeURIComponent(
                    file.name
                  )}`}
                  className="dashboard-note-card"
                >

                  <div className="note-card-icon purple">
                    📄
                  </div>


                  <div className="note-card-info">

                    <h3>
                      {file.name}
                    </h3>


                    <p>
                      PDF • Uploaded recently
                    </p>

                  </div>


                  <span className="note-arrow">
                    →
                  </span>

                </Link>

              ))}


            {/* ================================
                DEFAULT NOTE 1
            ================================= */}

            <Link
              to="/ask-ai?note=Data%20Structures"
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

            </Link>


            {/* ================================
                DEFAULT NOTE 2
            ================================= */}

            <Link
              to="/ask-ai?note=Java%20Programming"
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

            </Link>


            {/* ================================
                DEFAULT NOTE 3
            ================================= */}

            <Link
              to="/ask-ai?note=Software%20Engineering"
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

            </Link>

          </div>


          {/* ================================
              RECENT QUESTIONS
          ================================= */}

          <div className="dashboard-section-header">

            <div>

              <span>
                AI ACTIVITY
              </span>


              <h2>
                Recent Questions
              </h2>

            </div>


            <Link to="/ask-ai">
              Ask AI →
            </Link>

          </div>


          <div className="dashboard-questions">

            {recentQuestions.length > 0 ? (

              recentQuestions.map(
                (item) => (

                  <Link
                    key={item.id}
                    to={`/ask-ai?question=${encodeURIComponent(
                      item.question
                    )}`}
                    className="dashboard-question-card"
                  >

                    <div className="question-icon">
                      ✦
                    </div>


                    <div className="question-info">

                      <h3>
                        {item.question}
                      </h3>


                      <p>
                        📚 {item.note || 'Study Materials'}
                      </p>

                    </div>


                    <span className="question-arrow">
                      →
                    </span>

                  </Link>

                )
              )

            ) : (

              <div className="dashboard-empty-questions">

                <div className="empty-question-icon">
                  💬
                </div>


                <div>

                  <h3>
                    No questions yet
                  </h3>


                  <p>
                    Ask your first question to start
                    your AI learning history.
                  </p>

                </div>


                <Link to="/ask-ai">
                  Ask AI →
                </Link>

              </div>

            )}

          </div>


          {/* ================================
              QUICK ACTIONS
          ================================= */}

          <div className="dashboard-section-header quick-actions-header">

            <div>

              <span>
                QUICK ACTIONS
              </span>


              <h2>
                Continue Learning
              </h2>

            </div>

          </div>


          <div className="quick-actions">


            {/* MY NOTES */}

            <Link
              to="/notes"
              className="quick-action-card"
            >

              <div className="quick-action-icon purple">
                📚
              </div>


              <div>

                <h3>
                  My Notes
                </h3>


                <p>
                  Manage your study materials
                </p>

              </div>


              <span>
                →
              </span>

            </Link>


            {/* ASK AI */}

            <Link
              to="/ask-ai"
              className="quick-action-card"
            >

              <div className="quick-action-icon blue">
                ✦
              </div>


              <div>

                <h3>
                  Ask AI
                </h3>


                <p>
                  Ask questions from your notes
                </p>

              </div>


              <span>
                →
              </span>

            </Link>


            {/* PROGRESS */}

            <Link
              to="/progress"
              className="quick-action-card"
            >

              <div className="quick-action-icon green">
                📈
              </div>


              <div>

                <h3>
                  My Progress
                </h3>


                <p>
                  Track your learning progress
                </p>

              </div>


              <span>
                →
              </span>

            </Link>

          </div>


        </div>

      </main>

    </div>

  )
}


export default Dashboard