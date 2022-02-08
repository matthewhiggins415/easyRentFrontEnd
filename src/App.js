import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import SignOut from './components/Auth/SignOut'
import Landing from './components/Views/Landing.js'
import Home from './components/Views/Home'
import Profile from './components/Views/Profile'

const App = () => {
  const [user, setUser] = useState(null)
  // const [messageAlerts, setMessageAlerts] = useState([]) 
  console.log(user)

  const clearUser = () => setUser(null)

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
