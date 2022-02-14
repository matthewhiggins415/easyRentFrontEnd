import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { getAProperty } from '../../api/properties'

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
  padding: 12px;
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
`

const InfoContainer = styled.div`
  width: 90%;
  height: 25%;
`

const LinkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  'padding': "10px",
  height: "50%", 
  "text-align": "center"
}

const ConfirmDeleteDiv = styled.div`
  height: 400px;
  width: 400px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`

const ButtonConfirmContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const ConfirmButtons = styled.button`
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`

const NormalUI = ({ id, property, onDeleteClicked }) => {
  return (
  <>
  <Header>
    <h1>Property Details</h1>
    <ButtonContainer>
      <Link style={LinkStyle} to={`/editproperty/${id}`}>edit</Link>
      <Button onClick={onDeleteClicked}>❌</Button>
    </ButtonContainer>
  </Header>
  <InfoContainer>
    <p>{property.address}</p>
    <p>Rents Due: {property.DayRentDue}</p>
    <p>Units: {property.numOfUnits}</p>
    <p>total Rent: {property.totalRent}</p>
  </InfoContainer>
  <InfoContainer>
    <p>Tasks</p>
  </InfoContainer>
  <InfoContainer>
    <p>Tenants</p>
  </InfoContainer>
  </>
  )
}

const ConfirmDelete = ({ cancelDelete, confirmDelete }) => {
  return (
    <ConfirmDeleteDiv>
      <h3>Confirm Delete</h3>
      <ButtonConfirmContainer>
        <ConfirmButtons onClick={confirmDelete}>Yes</ConfirmButtons>
        <ConfirmButtons onClick={cancelDelete}>No</ConfirmButtons>
      </ButtonConfirmContainer>
    </ConfirmDeleteDiv>
  )
}

const PropertyDetails = ({ user }) => {
  const { id } = useParams()
  const [property, setProperty] = useState({})
  const [deleteClicked, setDeleteClicked] = useState(false)

  useEffect(() => {
    const retrieveProperty = async (user, id) => {
      let res = await getAProperty(user, id)
      let propertyData = res.data.property
      setProperty(propertyData)
    }

    retrieveProperty(user, id)
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const onDeleteClicked = () => {
    setDeleteClicked(true)
  }

  const cancelDelete = () => {
    setDeleteClicked(false)
  }

  const confirmDelete = () => {
    console.log('clicked')
  }

  return (
    <Container>
      {deleteClicked ?  <ConfirmDelete cancelDelete={cancelDelete} confirmDelete={confirmDelete}/> : <NormalUI id={id} property={property} onDeleteClicked={onDeleteClicked} /> }
    </Container>
  )
}


export default PropertyDetails