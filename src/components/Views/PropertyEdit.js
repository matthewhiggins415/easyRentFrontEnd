import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getAProperty, editAProperty } from '../../api/properties'
import styled from 'styled-components'
import { Navigate } from 'react-router'


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
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [property, setProperty] = useState({})

  useEffect(() => {
    const retrieveProperty = async (user, id) => {
      let res = await getAProperty(user, id)
      let propertyData = res.data.property
      setProperty(propertyData)
    }

    retrieveProperty(user, id)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      let formData = {
        address: property.address, 
        numOfUnits: property.numOfUnits, 
        totalRent: property.totalRent, 
        DayRentDue: property.DayRentDue
      }

      console.log(formData)
      const res = await editAProperty(user, id, formData)
      console.log(res)
      setShouldNavigate(true)
    } catch(error) {
      console.error()
    }
  }

  if (shouldNavigate) {
    return <Navigate to={`/property/${id}`} /> 
  }

  return (
    <Container>
      <ContainerHeader>
        <h1>Edit Property</h1>
        <Link style={linkStyle} to={`/property/${id}`}>❌</Link>
      </ContainerHeader>
      <Form onSubmit={onSubmit}>
        <InputGroup>
          <label>Address:</label>
          <Input 
            placeholder={`${property.address}`} 
            onChange={e => setProperty({...property, address: e.target.value})}
            name="address"
            required
          />
        </InputGroup>
        <InputGroup>
          <label>Rent Due:</label>
          <Input 
            placeholder={`${property.DayRentDue}`} 
            onChange={e => setProperty({...property, DayRentDue: e.target.value})}
            name="DayRentDue"
            required
          />
        </InputGroup>
        <InputGroup>
          <label>Number of Units:</label>
          <Input 
            placeholder={`${property.numOfUnits}`} 
            onChange={e => setProperty({...property, numOfUnits: e.target.value})}
            name="numOfUnits"
            required
          />
        </InputGroup>
        <InputGroup>
          <label>Total Rent:</label>
          <Input 
            placeholder={`${property.totalRent}`} 
            onChange={e => setProperty({...property, totalRent: e.target.value})}
            name="totalRent"
            required
          />
        </InputGroup>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Container>
  )
}

export default PropertyEdit