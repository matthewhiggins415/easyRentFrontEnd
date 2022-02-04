import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DIV = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  flexDirection: row;
  justifyContent: space-evenly;
  borderBottom: 1px solid black;
`
const NavContainer = styled.div`
  width: 300px;
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-evenly;
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

// const authenticatedOptions = (
//   <NavContainer>
//     <Link style={linkStyle} to='/change-password' >Change Password</Link>
//     <Link to='/sign-out' >Sign Out</Link>
//   </NavContainer>
// )

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