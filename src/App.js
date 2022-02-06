import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Landing from './components/Views/Landing.js'


const App = () => {
  const [user, setUser] = useState({})
  // const [messageAlerts, setMessageAlerts] = useState([]) 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
      </Routes>
    </>
  )
}

export default App
