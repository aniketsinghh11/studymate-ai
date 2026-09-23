import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {

    e.preventDefault()

    // Demo registration for frontend
    navigate('/dashboard')
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <span>✦</span>
          StudyMate <strong>AI</strong>
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start your smarter learning journey today.
        </p>

        <form onSubmit={handleRegister}>

          <div className="auth-field">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Create Account →
          </button>

        </form>

        <p className="auth-bottom">

          Already have an account?

          <a href="/login">
            Login
          </a>

        </p>

      </div>

    </div>

  )
}

export default Register