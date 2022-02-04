import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DIV = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
`
const NavContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const H1 = styled.h1`
  padding: 10px;
  text-align: center;
`

const linkStyle = {
  color: "white",
  underline: "none", 
  "text-decoration": "none",
  "background-color": "black", 
  padding: "12px", 
  "border-radius": "10px"
}

const authenticatedOptions = (
  <NavContainer>
    <NavLink style={linkStyle} to='/change-password' >Change Password</NavLink>
    <NavLink to='/sign-out' >Sign Out</NavLink>
  </NavContainer>
)

const unauthenticatedOptions = (
  <NavContainer>
    <NavLink style={linkStyle} to='/sign-up'>Sign Up</NavLink>
    <NavLink style={linkStyle} to='/sign-in'>Sign In</NavLink>
  </NavContainer>
)

const Header = () => {
  return (
    <DIV>
      <H1>easyRent</H1>
      {unauthenticatedOptions}
    </DIV>
  )
}

export default Header