import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser } from '../../api/auth'
import { Link } from 'react-router-dom'

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

const Profile = ({ user }) => {
  const [landlord, setLandlord] = useState({})

  useEffect(() => {
    const retrieveLandlord = async (user) => {
      let res = await getUser(user)
      console.log(res)
      setLandlord(res.data.user)
    }

    retrieveLandlord(user)
  }, [])

  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <h2>Landlord Contact Info</h2>
          <Link to={`/profileEdit/${user._id}`}>Edit</Link>
        </ProfileHeader>
        <ProfileBody>
          <p>Name: {landlord.firstName + ' ' + landlord.lastName}</p>
          <p>Email: {landlord.email}</p>
          <p>Phone: {landlord.phone}</p>
          <p>Account created: {String(landlord.stripeAccountCreated)}</p>
          <p>Account is active: {String(landlord.stripeAccountCreated)}</p>
        </ProfileBody>
      </ProfileContainer> 
    </Container>
  )
}

export default Profile