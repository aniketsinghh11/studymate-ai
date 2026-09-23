import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function AskAI() {

  const [searchParams] = useSearchParams()

  const selectedNote = searchParams.get('note')
  const dashboardQuestion = searchParams.get('question')

  const [question, setQuestion] = useState(
    dashboardQuestion || ''
  )

  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hello! 👋 I'm your AI study assistant. Ask me anything about your study materials."
    }
  ])

  const handleSend = () => {

    if (question.trim() === '') {
      return
    }

    const userMessage = {
      type: 'user',
      text: question
    }

    const aiMessage = {
      type: 'ai',
      text: "I'm currently a demo version. Once the AI backend is connected, I'll answer this question using your uploaded study materials."
    }

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      aiMessage
    ])

    setQuestion('')
  }

  return (

    <div className="ask-ai-page">

      <div className="ask-ai-container">

        <div className="ask-ai-header">

          <span>
            ✦ AI STUDY ASSISTANT
          </span>

          <h1>
            Ask AI
          </h1>

          <p>
            Ask questions about your study materials and get simple explanations.
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


        <div className="chat-card">

          <div className="chat-header">

            <div className="chat-ai-icon">
              ✦
            </div>

            <div>

              <h3>
                StudyMate AI
              </h3>

              <span>
                AI Study Assistant • Online
              </span>

            </div>

          </div>


          <div className="chat-messages">

            {messages.map((message, index) => (

              message.type === 'ai' ? (

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

              ) : (

                <div
                  className="user-message"
                  key={index}
                >

                  <p>
                    {message.text}
                  </p>

                </div>

              )

            ))}

          </div>


          <div className="chat-input-area">

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
            />

            <button onClick={handleSend}>
              Send →
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default AskAI