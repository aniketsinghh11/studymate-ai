import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Notes from './pages/Notes'
import AskAI from './pages/AskAI'
import Progress from './pages/Progress'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/ask-ai" element={<AskAI />} />

        <Route path="/progress" element={<Progress />} />

        <Route path="/history" element={<History />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App