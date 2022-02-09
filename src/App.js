import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import SignOut from './components/Auth/SignOut'
import Landing from './components/Views/Landing.js'
import Home from './components/Views/Home'
import Profile from './components/Views/Profile'
import styled from 'styled-components'
import SideNavBar from './components/Header/SideNavBar'
import Properties from './components/Views/Properties'
import PropertyDetails from './components/Views/PropertyDetails'
import PropertyEdit from './components/Views/PropertyEdit'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`

const App = () => {
  const [user, setUser] = useState(null)
  // const [messageAlerts, setMessageAlerts] = useState([]) 
  console.log(user)

  const clearUser = () => setUser(null)

  return (
    <AppContainer>
      <Header user={user}/>
      <Container>
      { user ? <SideNavBar /> : ''}
      <Routes>
        <Route path="/" element={<Landing />} exact/>
        <Route path="/register" element={<Register setUser={setUser} />} exact/>
        <Route path="/login" element={<Login setUser={setUser}/>} exact/>
        <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user}/>} exact/>
        <Route path="/home" element={<Home />} exact/>
        <Route path="/profile" element={<Profile />} exact/>
        <Route path="/properties" element={<Properties user={user}/>} exact/>
        <Route path="/property/:id" element={<PropertyDetails user={user}/>} exact/>
        <Route path="/editproperty/:id" element={<PropertyEdit user={user}/>} exact/>
      </Routes>
      </Container>
    </AppContainer>
  )
}

export default App
