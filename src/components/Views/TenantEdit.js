import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { getATenant } from '../../api/tenant'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 90%;
  margin: 0 auto;
`

const Form = styled.form`
  background-color: pink
  width: 60%;
  min-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 25px auto;
`

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 1px solid black;
  margin: 5px auto;
  background-color: white;
`

const Button = styled.button`
  margin: 5px auto;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`

const EditTenant = ({ user }) => {
  const { id } = useParams()
  const [tenant, setTenant] = useState({})
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    const retrieveTenant = async (user, id) => {
      const res = await getATenant(user, id)
      console.log(res)
      let tenantData = res.data.tenant
      setTenant(tenantData)
    }

    retrieveTenant(user, id)
  }, [])

  const handleClick = () => {
    setShouldNavigate(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try { 
      const formData = {
          firstName: tenant.firstName, 
          lastName: tenant.lastName, 
          email: tenant.email, 
          phone: tenant.phone, 
          rentDate: tenant.rentDate, 
          rentAmount: tenant.rentAmount
      }

      console.log(formData)
    } catch(error) {
      console.error()
    }
  }

  if (shouldNavigate) {
    return <Navigate to={`/tenant/${id}`}/>
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Edit Tenant</h1>
        <button onClick={() => handleClick()}>back</button>
      </HeaderContainer>
      <Form onSubmit={handleSubmit}>
          <Input 
            placeholder={`${tenant.firstName}`} 
            onChange={e => setTenant({...tenant, firstName: e.target.value})} 
            type="text" 
            name="firstName" 
          />
          <Input 
            placeholder={`${tenant.lastName}`} 
            onChange={e => setTenant({...tenant, lastName: e.target.value})} 
            type="text" 
            name="lastName" 
            required 
          />
          <Input 
            placeholder={`${tenant.email}`} 
            onChange={e => setTenant({...tenant, email: e.target.value})} 
            type="email" 
            name="email" 
            required 
          />
          <Input 
            placeholder={`${tenant.phone}`} 
            onChange={e => setTenant({...tenant, phone: e.target.value})} 
            type="text" 
            name="phone" 
            required 
          />
          <Input 
            placeholder={`${tenant.rentAmount}`} 
            onChange={e => setTenant({...tenant, rentAmount: e.target.value})} 
            type="number" 
            name="rentAmount" 
            required 
          />
          <Input 
            placeholder={`${tenant.rentDate}`} 
            onChange={e => setTenant({...tenant, rentDate: e.target.value})} 
            type="number" 
            name="rentDate" 
            required 
          />
          <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default EditTenant