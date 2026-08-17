import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Canvas from './pages/Canvas.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </>
  )
}

export default App
