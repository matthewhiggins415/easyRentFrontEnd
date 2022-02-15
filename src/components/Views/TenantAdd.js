import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { createATenant } from '../../api/tenant'
import { useParams, Navigate } from 'react-router'

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

const TenantAdd = ({ user }) => {
  const { id } = useParams()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [rentDate, setRentDate] = useState()
  const [rentAmount, setRentAmount] = useState()
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const tenant = { 
      property: id,
      firstName: firstName, 
      lastName: lastName, 
      email: email, 
      phone: phone, 
      rentDate: rentDate, 
      rentAmount: rentAmount
    }
    console.log(tenant)

    try { 
      const res = await createATenant(user, tenant)
      console.log(res)
      setShouldNavigate(true)
    } catch(e) {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone()
      setRentAmount()
      setRentAmount()
      console.log(e)
    }
  }

  if (shouldNavigate) {
    return <Navigate to={`/property/${id}`} />
  }

  return (
    <Container>
      <HeaderContainer>
          <h1>Add Property</h1>
          <button onClick={goBack}>❌</button>
      </HeaderContainer>
      <Form onSubmit={onSubmit}>
        <Input onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" type="text" placeholder="first name"/>
        <Input onChange={(e) => setLastName(e.target.value)} value={lastName} name="lastName" type="text" placeholder="last name"/>
        <Input onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="email"/>
        <Input onChange={(e) => setPhone(e.target.value)} value={phone} name="phone" type="number" placeholder="phone number"/>
        <Input onChange={(e) => setRentDate(e.target.value)} value={rentDate} name="rentDate" type="number" placeholder="rent due date"/>
        <Input onChange={(e) => setRentAmount(e.target.value)} value={rentAmount} name="rentAmount" type="number" placeholder="rent amount"/>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>   
  )
}

export default TenantAdd