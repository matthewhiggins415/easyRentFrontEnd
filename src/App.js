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
import Tenants from "./components/Views/Tenants"
import PropertyAdd from './components/Views/PropertyAdd'
import TenantAdd from './components/Views/TenantAdd'
import TenantDetails from './components/Views/TenantDetails'
import TenantEdit from './components/Views/TenantEdit'
import Settings from './components/Views/Settings'
import ProfileEdit from './components/Views/ProfileEdit'
import Setup from './components/Views/Setup'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
        <Route path="/profile" element={<Profile user={user} />} exact/>
        <Route path="/profileEdit/:id" element={<ProfileEdit user={user} />} exact/>
        <Route path="/properties" element={<Properties user={user}/>} exact/>
        <Route path="/property/:id" element={<PropertyDetails user={user}/>} exact/>
        <Route path="/editproperty/:id" element={<PropertyEdit user={user}/>} exact/>
        <Route path="/tenants" element={<Tenants user={user} />} exact/>
        <Route path="/propertyadd" element={<PropertyAdd user={user} />} exact/>
        <Route path="/tenantadd/:id" element={<TenantAdd user={user} />} exact/>
        <Route path="/tenant/:id" element={<TenantDetails user={user} />} exact/>
        <Route path="/tenantedit/:id" element={<TenantEdit user={user} />} exact/>
        <Route path="/settings" element={< Settings user={user}/>} exact/>
        <Route path="/setup" element={< Setup user={user}/>} exact/>

      </Routes>
      </Container>
    </AppContainer>
  )
}

export default App
