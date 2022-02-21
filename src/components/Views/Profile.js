import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

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

const ProfileBody = styled.div`
  width: 90%;
  margin: 0 auto;
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

const ProfileForm = ({ user, setShowForm }) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <h2>Edit Contact Info</h2>
        <Button onClick={() => setShowForm(false)}>Cancel</Button>
      </ProfileHeader>
      <ProfileFormContainer>
        <Form>
          <Input placeholder={`first name`}/>
          <Input placeholder={`last name`}/>
          <Input placeholder={`${user.email}`}/>
          <Input placeholder={`phone number`}/>
          <Button>Submit</Button>
        </Form>
      </ProfileFormContainer>
    </ProfileContainer>
  )
}

const ProfileDetails = ({ user, setShowForm }) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <h2>Landlord Contact Info</h2>
        <Button onClick={() => setShowForm(true)}>Edit</Button>
      </ProfileHeader>
      <ProfileBody>
        <p>Name: </p>
        <p>Email: {user.email}</p>
        <p>Phone: </p>
        <p>Account created: {String(user.stripeAccountCreated)}</p>
        <p>Account is active: {String(user.stripeAccountCreated)}</p>
      </ProfileBody>
    </ProfileContainer> 
  )
}

const Profile = ({ user }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <Container>
      { showForm ? <ProfileForm setShowForm={setShowForm} user={user}/> : <ProfileDetails setShowForm={setShowForm} user={user}/> }
    </Container>
  )
}

export default Profile