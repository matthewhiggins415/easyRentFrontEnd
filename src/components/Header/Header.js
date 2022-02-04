import React from 'react'
import { Link } from 'react-router-dom'
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

const logoLink = {
  color: "black",
  "font-size": "20px",
  underline: "none", 
  "text-decoration": "none",
  padding: "12px", 
  "border-radius": "10px"
}

const authenticatedOptions = (
  <NavContainer>
    <Link style={linkStyle} to='/change-password' >Change Password</Link>
    <Link to='/sign-out' >Sign Out</Link>
  </NavContainer>
)

const unauthenticatedOptions = (
  <NavContainer>
    <Link style={linkStyle} to='/register'>Register</Link>
    <Link style={linkStyle} to='/login'>Login</Link>
  </NavContainer>
)

const Header = () => {
  return (
    <DIV>
      <Link style={logoLink} to="/">easyRent</Link>
      {unauthenticatedOptions}
    </DIV>
  )
}

export default Header