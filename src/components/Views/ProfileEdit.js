import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { getUser, editALandlord } from '../../api/auth'
import { Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router'


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  height: auto;
`

const ProfileHeader = styled.div`
  width: 90%;
  margin: 0 auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  background-color: white;
  height: auto;
  border: 1px solid black;
  cursor: pointer; 
  padding: 10px;
`

const ProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 50%; 
  margin: 0 auto; 
  height: auto; 
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Input = styled.input`
  margin: 5px;
  padding: 10px;
`
const ProfileForm = ({ user }) => {
    const { id } = useParams()

    const [landlord, setLandlord] = useState({})
    const [shouldNavigate, setShouldNavigate] = useState(false)
  
    useEffect(() => {
      const retrieveUser = async (user) => {
        let res = await getUser(user)
        let userData = res.data.user
        console.log(userData)
        setLandlord(userData)
      }
  
      retrieveUser(user)
    }, [])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      
      try { 
        let formData = {
          email: landlord.email, 
          firstName: landlord.firstName,
          lastName: landlord.lastName, 
          phone: landlord.phone
        }
        let res = await editALandlord(user, formData, id)
        console.log(res)
        setShouldNavigate(true)
      } catch(error) {
        console.error()
      }
    }

    if (shouldNavigate) {
      return <Navigate to="/profile" />
    }
  
    return (
      <ProfileContainer>
        <ProfileHeader>
          <h2>Edit Contact Info</h2>
          <Link to={`/profile`}>Cancel</Link>
        </ProfileHeader>
        <ProfileFormContainer>
          <Form onSubmit={handleSubmit}>
            <Input 
              onChange={e => setLandlord({...landlord, firstName: e.target.value})} 
              placeholder={`first name`}
              type="string"
              name="firstName"
            />
            <Input 
              placeholder={`last name`}
              onChange={e => setLandlord({...landlord, lastName: e.target.value})} 
              type="string"
              name="lastName"
            />
            <Input 
              onChange={e => setLandlord({...landlord, email: e.target.value})} 
              placeholder={`${landlord.email}`}
              type="string"
              name="email"
            />
            <Input 
              onChange={e => setLandlord({...landlord, phone: e.target.value})} 
              placeholder={`phone number`}
              type="string"
              name="phone"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </ProfileFormContainer>
      </ProfileContainer>
    )
  }
  
  export default ProfileForm 