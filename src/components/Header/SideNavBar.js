import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DIV = styled.div`
  display: flex;
  height: 90vh;
  width: 14vw;
  border-right: 1px solid black;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const LinkContainer = styled.div`
  margin-top: 30px;
  height: 50%;
  display: flex;
  flex-direction: column;
`

const linkStyle = {
    color: "black",
    underline: "none", 
    "textDecoration": "none",
    "backgroundColor": "transparent", 
    padding: "12px", 
    "borderRadius": "10px"
}  

const SideNavBar = () => {
  return (
    <DIV>
      <LinkContainer>
        <Link style={linkStyle} to="/profile">Profile</Link>
        <Link style={linkStyle} to="/properties">Properties</Link>
        <Link style={linkStyle} to="/tenants">Tenants</Link>
        <Link style={linkStyle} to="/payments">Payments</Link>
        <Link style={linkStyle} to="/setup">Setup</Link>
        <Link style={linkStyle} to="/settings">Setting</Link>
        <Link style={linkStyle} to="/documents">Documents</Link>
      </LinkContainer>
    </DIV>
  )
}

export default SideNavBar