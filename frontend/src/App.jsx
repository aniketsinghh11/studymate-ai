import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Notes from './pages/Notes'
import AskAI from './pages/AskAI'
import Progress from './pages/Progress'
import History from './pages/History'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        
        <Route path="/ask-ai" element={<ProtectedRoute><AskAI /></ProtectedRoute>} />
        
        <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
        
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App