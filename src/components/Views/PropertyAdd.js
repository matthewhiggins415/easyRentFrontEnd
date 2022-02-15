import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useParams, Navigate } from 'react-router'
import { createAProperty } from '../../api/properties'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Form = styled.form`
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column; 
  margin: auto;
`

const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin: 5px auto;
  background-color: white;
  outline: none;
  border: 1px solid black;
`

const Button = styled.button`
  width: 50%;
  padding: 10px;
  outline: none;
  margin: 5px auto;
  background-color: white;
  border: 1px solid black;
  cursor: pointer; 
`

const PropertyAdd = ({ user }) => {
  const { id } = useParams()

  const [address, setAddress] = useState('')
  const [numOfUnits, setNumOfUnits] = useState()
  const [totalRent, setTotalRent] = useState()
  const [DayRentDue, setDayRentDue] = useState()
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const property = { 
      address: address, 
      numOfUnits: numOfUnits, 
      totalRent: totalRent, 
      DayRentDue: DayRentDue
    }
    console.log(property)

    try { 
      const res = await createAProperty(user, property)
      console.log(res)
      setShouldNavigate(true)
    } catch(e) {
      setAddress('')
      setNumOfUnits()
      setTotalRent()
      setDayRentDue()
      console.log(e)
    }
  }

  if (shouldNavigate) {
    return <Navigate to={`/properties`} />
  }

  return (
    <Container>
      <HeaderContainer>
          <h1>Add Property</h1>
          <button onClick={goBack}>❌</button>
      </HeaderContainer>
      <Form onSubmit={onSubmit}>
        <Input onChange={(e) => setAddress(e.target.value)} value={address} name="address" type="text" placeholder="Street address"/>
        <Input onChange={(e) => setNumOfUnits(e.target.value)} value={numOfUnits} name="numOfUnits" type="number" placeholder="Number of units"/>
        <Input onChange={(e) => setTotalRent(e.target.value)} value={totalRent} name="totalRent" type="number" placeholder="Total rent of building"/>
        <Input onChange={(e) => setDayRentDue(e.target.value)} value={DayRentDue} name="DayRentDue" type="number" placeholder="Day of month rent is due"/>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>   
  )
}

export default PropertyAdd