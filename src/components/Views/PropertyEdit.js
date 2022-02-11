import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getAProperty } from '../../api/properties'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const linkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  'padding': "12px"
}  

const PropertyEdit = ({ user }) => {
  const { id } = useParams()
  const [property, setProperty] = useState({})

  useEffect(() => {
    console.log(id)
    const retrieveProperty = async (user, id) => {
      let res = await getAProperty(user, id)
      let propertyData = res.data.property
      console.log(propertyData)
      setProperty(propertyData)
    }

    retrieveProperty(user, id)
  })

  return (
    <Container>
      <ContainerHeader>
        <h1>Edit Property</h1>
        <Link style={linkStyle} to={`/property/${id}`}>❌</Link>
      </ContainerHeader>
    </Container>
  )
}

export default PropertyEdit