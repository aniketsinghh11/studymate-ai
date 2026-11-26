import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup, login } from "../api";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ================================
  // REGISTER USER
  // ================================

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Remove unnecessary spaces
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Check name
    if (cleanName === "") {
      alert("Please enter your full name.");
      return;
    }

    // Check email
    if (cleanEmail === "") {
      alert("Please enter your email.");
      return;
    }

    // Check password
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      await signup({ name: cleanName, email: cleanEmail, password });

      const result = await login({ email: cleanEmail, password });

      localStorage.setItem("token", result.token);
      localStorage.setItem("studymateName", cleanName);
      localStorage.setItem("studymateEmail", cleanEmail);
      localStorage.setItem("studymateLoggedIn", "true");

      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="register-layout">
        {/* ================================
            LEFT INFORMATION PANEL
        ================================= */}

        <div className="register-info">
          <div className="register-badge">✦ AI-Powered Learning</div>

          <h2>
            Learn smarter.
            <br />
            <span>Grow faster.</span>
          </h2>

          <p>
            Create your StudyMate account and keep your notes, questions and
            learning progress all in one place.
          </p>

          <div className="register-benefits">
            <div className="register-benefit">
              <div className="register-benefit-icon">📚</div>

              <div className="register-benefit-text">
                <strong>Keep your study materials</strong>
                <span>Access your notes whenever you need them.</span>
              </div>
            </div>

            <div className="register-benefit">
              <div className="register-benefit-icon">✦</div>

              <div className="register-benefit-text">
                <strong>Ask your AI Assistant</strong>
                <span>Get simple answers from your study materials.</span>
              </div>
            </div>

            <div className="register-benefit">
              <div className="register-benefit-icon">📈</div>

              <div className="register-benefit-text">
                <strong>Track your progress</strong>
                <span>See your learning activity in one place.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================
            RIGHT REGISTER FORM
        ================================= */}

        <div className="register-form-side">
          <div className="register-form">
            {/* Logo */}

            <div className="register-logo">
              <span>✦</span>
              StudyMate <span>AI</span>
            </div>

            {/* Heading */}

            <h1>Create Account</h1>

            <p className="register-subtitle">
              Start your smarter learning journey today.
            </p>

            {/* Registration Form */}

            <form onSubmit={handleRegister}>
              {/* Full Name */}

              <div className="register-field">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}

              <div className="register-field">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}

              <div className="register-field">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Register Button */}

              <button type="submit" className="register-submit">
                Create Account →
              </button>
            </form>

            <p className="register-note">
              Your account is stored securely in this demo.
            </p>

            {/* Login Link */}

            <p className="auth-bottom">
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
