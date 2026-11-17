import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api'

function Register() {

  const navigate = useNavigate()
const [error, setError] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {

  e.preventDefault()
  setError('')

  try {
    const result = await signup({ name, email, password })
    localStorage.setItem('token', result.token)
    navigate('/dashboard')
  } catch (err) {
    setError(err.message)
  }
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

          {error && <p className="auth-error">{error}</p>}

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