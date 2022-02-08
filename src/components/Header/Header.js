import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DIV = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
`
const NavContainer = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const linkStyle = {
  color: "white",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "black", 
  padding: "12px", 
  "borderRadius": "10px"
}

const logoLink = {
  color: "black",
  "fontSize": "20px",
  underline: "none", 
  "textDecoration": "none",
  padding: "12px", 
  "borderRadius": "10px"
}

const authenticatedOptions = (
  <NavContainer>
    <Link style={linkStyle} to='/sign-out' >Sign Out</Link>
  </NavContainer>
)

const unauthenticatedOptions = (
  <NavContainer>
    <Link style={linkStyle} to='/register'>Register</Link>
    <Link style={linkStyle} to='/login'>Login</Link>
  </NavContainer>
)

const Header = ({ user }) => {
  return (
    <DIV>
      <NavContainer>
        <Link style={logoLink} to="/">easyRent</Link>
      </NavContainer>
      {user ? authenticatedOptions : unauthenticatedOptions}
    </DIV>
  )
}

export default Header