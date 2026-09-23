import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    // Demo login for frontend
    navigate('/dashboard')
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <span>✦</span>
          StudyMate <strong>AI</strong>
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleLogin}>

          <div className="auth-field">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="auth-field">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Login →
          </button>

        </form>

        <p className="auth-bottom">

          Don't have an account?

          <a href="/register">
            Create Account
          </a>

        </p>

      </div>

    </div>

  )
}

export default Login