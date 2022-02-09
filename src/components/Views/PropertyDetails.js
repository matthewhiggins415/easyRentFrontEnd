import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { Navigate } from 'react-router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  height: auto;
`

const Button = styled.button`
  display: flex;
  height: 50%; 
  background-color: white;
  text-align: center;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer; 
  margin-right: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const Header = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
`

const LinkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  'padding': "12px"
}

const PropertyDetails = ({ user }) => {
  const { id } = useParams()
  const [property, setProperty] = useState({})

  useEffect(() => {
    console.log(id)
  })

  if (!user) {
    return <Navigate to='/' />
  }

  const propertyJsx = () => (
    <p></p>
  )

  return (
    <Container>
      <Header>
        <h1>Property Details</h1>
        <ButtonContainer>
          <Link style={linkStyle} to={`/editproperty/${id}`}>📝</Link>
          <Button>❌</Button>
        </ButtonContainer>
      </Header>
      <div>
        <p>property item</p>
      </div>
    </Container>
  )
}

export default PropertyDetails