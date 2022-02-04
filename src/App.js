import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Landing from './components/Views/Landing.js'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
