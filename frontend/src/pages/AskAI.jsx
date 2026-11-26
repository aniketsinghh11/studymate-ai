import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { askAI } from '../api'

function AskAI() {
  const [searchParams] = useSearchParams()

  const selectedNote = searchParams.get('note')
  const dashboardQuestion = searchParams.get('question')

  const [question, setQuestion] = useState(
    dashboardQuestion || ''
  )

  const [isThinking, setIsThinking] = useState(false)
  const [pdfFile, setPdfFile] = useState(null)

  const messagesEndRef = useRef(null)

  const welcomeMessage = {
    type: 'ai',
    text: selectedNote
      ? `Hello! 👋 I'm ready to help you understand "${selectedNote}". Ask me anything about this study material.`
      : "Hello! 👋 I'm your AI study assistant. Ask me anything about your study materials."
  }

  const [messages, setMessages] = useState([
    welcomeMessage
  ])


  // ================================
  // AUTO SCROLL
  // ================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, isThinking])

  // ================================
  // SEND QUESTION
  // ================================

  const handleSend = () => {
    if (
      question.trim() === '' ||
      isThinking
    ) {
      return
    }

    const userQuestion = question.trim()

    // ================================
    // SAVE QUESTION TO HISTORY
    // ================================

    const oldHistory =
      localStorage.getItem('studymateHistory')

    let history = []

    if (oldHistory) {
      try {
        const parsedHistory =
          JSON.parse(oldHistory)

        if (Array.isArray(parsedHistory)) {
          history = parsedHistory
        }
      } catch (error) {
        console.log(
          'Could not load history:',
          error
        )

        history = []
      }
    }

    const newHistoryItem = {
      id: Date.now(),
      question: userQuestion,
      note:
        selectedNote ||
        'Study Materials',
      time: new Date().toISOString()
    }

    const updatedHistory = [
      ...history,
      newHistoryItem
    ]

    localStorage.setItem(
      'studymateHistory',
      JSON.stringify(updatedHistory)
    )

    window.dispatchEvent(
      new Event('studymateHistoryChanged')
    )

    // ================================
    // ADD USER MESSAGE
    // ================================

    const userMessage = {
      type: 'user',
      text: userQuestion
    }

    setMessages(
      (previousMessages) => [
        ...previousMessages,
        userMessage
      ]
    )

    setQuestion('')

    setIsThinking(true)

    // ================================
    // DEMO AI RESPONSE
    // ================================

    // ================================
    // REAL AI RESPONSE
    // ================================

    askAI(userQuestion)
      .then((result) => {
        setMessages((previousMessages) => [
          ...previousMessages,
          { type: 'ai', text: result.answer }
        ])
      })
      .catch((err) => {
        console.error('Ask AI error:', err)
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            type: 'ai',
            text: 'Sorry, I could not reach the AI service. Please try again.'
          }
        ])
      })
      .finally(() => {
        setIsThinking(false)
      })
      
    }
  // ================================
  // CLEAR CHAT
  // ================================

  const handleClearChat = () => {
    if (isThinking) {
      return
    }

    const confirmClear = window.confirm(
      'Are you sure you want to clear this conversation?'
    )

    if (!confirmClear) {
      return
    }

    setMessages([
      welcomeMessage
    ])
  }


  // ================================
  // SUGGESTED QUESTIONS
  // ================================

  const selectSuggestion = (text) => {
    setQuestion(text)
  }

  return (
    <div className="ask-ai-page">

      <div className="ask-ai-container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="ask-ai-header">

          <span>
            ✦ AI STUDY ASSISTANT
          </span>

          <h1>
            Ask AI
          </h1>

          <p>
            Ask questions about your study
            materials and get simple explanations.
          </p>

          {selectedNote && (
            <div className="selected-note-badge">

              📚 Asking about:

              <strong>
                {selectedNote}
              </strong>

            </div>
          )}

        </div>


        {/* ================================
            CHAT CARD
        ================================= */}

        <div className="chat-card">

          {/* ================================
              CHAT HEADER
          ================================= */}

          <div className="chat-header">

            <div className="chat-ai-icon">
              ✦
            </div>

            <div className="chat-ai-info">

              <h3>
                StudyMate AI
              </h3>

              <span>
                AI Study Assistant • Online
              </span>

            </div>

            {/* CLEAR CHAT BUTTON */}

            <button
              className="clear-chat-button"
              onClick={handleClearChat}
              disabled={isThinking}
            >
              🗑 Clear Chat
            </button>

          </div>


          {/* ================================
              CHAT MESSAGES
          ================================= */}

          <div className="chat-messages">

            {messages.map(
              (message, index) => (

                message.type === 'ai'

                  ? (

                    <div
                      className="ai-message"
                      key={index}
                    >

                      <div className="message-avatar">
                        ✦
                      </div>

                      <div className="message-content">

                        <strong>
                          StudyMate AI
                        </strong>

                        <p>
                          {message.text}
                        </p>

                      </div>

                    </div>

                  )

                  : (

                    <div
                      className="user-message"
                      key={index}
                    >

                      <p>
                        {message.text}
                      </p>

                    </div>

                  )

              )
            )}


            {/* ================================
                AI THINKING
            ================================= */}

            {isThinking && (

              <div className="ai-message">

                <div className="message-avatar">
                  ✦
                </div>

                <div className="message-content">

                  <strong>
                    StudyMate AI
                  </strong>

                  <div className="thinking-area">

                    <span className="thinking-text">
                      Thinking
                    </span>

                    <div className="thinking-dots">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>

                </div>

              </div>

            )}

            <div ref={messagesEndRef}></div>

          </div>


          {/* ================================
              SUGGESTED QUESTIONS
          ================================= */}

          <div className="suggested-questions">

            <span>
              Try asking:
            </span>

            <button
              onClick={() =>
                selectSuggestion(
                  'Explain this topic in simple words'
                )
              }
              disabled={isThinking}
            >
              Explain this topic
            </button>

            <button
              onClick={() =>
                selectSuggestion(
                  'Give me the important points'
                )
              }
              disabled={isThinking}
            >
              Important points
            </button>

            <button
              onClick={() =>
                selectSuggestion(
                  'Give me an example'
                )
              }
              disabled={isThinking}
            >
              Give an example
            </button>

          </div>

{/* ================================
        INPUT AREA
================================ */}

<div className={`chat-input-area ${pdfFile ? 'has-pdf' : ''}`}>

  {/* PDF UPLOAD */}
  <div className="pdf-upload-wrapper">

    <label htmlFor="pdf-upload" className="upload-btn">
      📎 Upload PDF
    </label>

    <input
      type="file"
      id="pdf-upload"
      accept=".pdf,application/pdf"
      hidden
      onChange={(e) => {
        const file = e.target.files?.[0]

        if (file) {
          setPdfFile(file)
        }
      }}
    />

  </div>

  {/* PDF PREVIEW */}
  {pdfFile && (
    <div className="pdf-preview">
      <span className="pdf-icon">📄</span>

      <div className="pdf-details">
        <strong>{pdfFile.name}</strong>
        <small>
          {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
        </small>
      </div>

      <button
        type="button"
        className="remove-pdf"
        onClick={() => {
          setPdfFile(null)
          document.getElementById('pdf-upload').value = ''
        }}
      >
        ✕
      </button>
    </div>
  )}

  {/* QUESTION INPUT */}
  <input
    type="text"
    placeholder={
      selectedNote
        ? `Ask something about ${selectedNote}...`
        : 'Ask something about your notes...'
    }
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSend()
      }
    }}
    disabled={isThinking}
  />

  {/* SEND BUTTON */}
  <button
    onClick={handleSend}
    disabled={isThinking}
  >
    {isThinking ? 'Thinking...' : 'Send →'}
  </button>

</div>
        </div>

      </div>

    </div>
  )
}

export default AskAI