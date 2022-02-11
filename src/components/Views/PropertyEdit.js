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

const Form = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const InputGroup = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`

const SubmitBtn = styled.button`
  width: 30%;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  margin: 10px auto;
  cursor: pointer;
`

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
      <Form>
        <InputGroup>
          <label>Address:</label>
          <Input placeholder={`${property.address}`} />
        </InputGroup>
        <InputGroup>
          <label>Rent Due:</label>
          <Input placeholder={`${property.DayRentDue}`} />
        </InputGroup>
        <InputGroup>
          <label>Number of Units:</label>
          <Input placeholder={`${property.numOfUnits}`} />
        </InputGroup>
        <InputGroup>
          <label>Total Rent:</label>
          <Input placeholder={`${property.totalRent}`} />
        </InputGroup>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Container>
  )
}

export default PropertyEdit