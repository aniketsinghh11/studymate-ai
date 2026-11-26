import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../api'

function Login() {

  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

// ================================
  // LOGIN USER
  // ================================

  const handleLogin = async (e) => {

  e.preventDefault()
  setError('')

const cleanEmail =
      email.trim().toLowerCase()

    if (cleanEmail === '') {
      alert('Please enter your email.')
      return
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.')
      return
    }

    try {
      const result = await login({ email: cleanEmail, password })

      localStorage.setItem('token', result.token)
      localStorage.setItem('studymateName', result.user.name)
      localStorage.setItem('studymateEmail', cleanEmail)
      localStorage.setItem('studymateLoggedIn', 'true')

      navigate('/dashboard')
    } catch (err) {
      alert(err.message)
    }
  }



  return (

    <div className="auth-page">


      <div className="login-layout">


        {/* =================================
            LEFT INFORMATION PANEL
        ================================= */}

        <div className="login-info">


          <div className="login-badge">
            ✦ AI-Powered Learning
          </div>


          <h2>
            Welcome back.
            <br />
            <span>Let's keep learning.</span>
          </h2>


          <p>
            Your notes, AI assistant and learning
            progress are waiting for you.
            Continue your study journey with StudyMate.
          </p>


          <div className="login-benefits">


            <div className="login-benefit">

              <div className="login-benefit-icon">
                📚
              </div>

              <div className="login-benefit-text">

                <strong>
                  Your Study Materials
                </strong>

                <span>
                  Keep your learning materials organized.
                </span>

              </div>

            </div>


            <div className="login-benefit">

              <div className="login-benefit-icon">
                ✦
              </div>

              <div className="login-benefit-text">

                <strong>
                  StudyMate AI
                </strong>

                <span>
                  Ask questions and understand concepts easily.
                </span>

              </div>

            </div>


            <div className="login-benefit">

              <div className="login-benefit-icon">
                📈
              </div>

              <div className="login-benefit-text">

                <strong>
                  Track Your Progress
                </strong>

                <span>
                  See your learning activity in one place.
                </span>

              </div>

            </div>


          </div>


        </div>


        {/* =================================
            RIGHT LOGIN FORM
        ================================= */}

        <div className="login-form-side">


          <div className="login-form">


            {/* LOGO */}

            <div className="login-logo">

              <span>✦</span>

              StudyMate <strong>AI</strong>

            </div>


            {/* HEADING */}

            <h1>
              Welcome Back
            </h1>


            <p className="login-subtitle">
              Login to continue your learning journey.
            </p>


            {/* FORM */}

            <form onSubmit={handleLogin}>


              {/* EMAIL */}

              <div className="login-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>


              {/* PASSWORD */}

              <div className="login-field">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

              </div>


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="login-submit"
              >
                Login →
              </button>


            </form>


            {/* REGISTER */}

            <p className="auth-bottom">

              Don't have an account?

              <Link to="/register">
                Create Account
              </Link>

            </p>


          </div>


        </div>



      </div>


    </div>

  )

}

export default Login