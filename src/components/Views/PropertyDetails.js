import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { getAProperty } from '../../api/properties'
import { getAllTenants } from '../../api/tenant'
import { deleteAProperty } from '../../api/properties'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  height: auto;
  overflow: scroll;
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

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
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
  min-height: 25%;
  height: auto;
  margin: 20px auto;
`

const TenantListContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 3rem auto;
`

const LinkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  'padding': "10px",
  height: "50%", 
  "textAlign": "center"
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

const TenantContainer = styled.div`
  margin: 6px auto;
  display: flex;
  border: 1px solid black;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`

const RentalDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NormalUI = ({ id, property, onDeleteClicked, tenantJsx }) => {
  return (
  <Container>
  <Header>
    <h1>Property Details</h1>
    <ButtonContainer>
      <Link style={LinkStyle} to={`/editproperty/${id}`}>edit</Link>
      <Button onClick={onDeleteClicked}>❌</Button>
    </ButtonContainer>
  </Header>
  <InfoContainer>
    <p>{property.address}</p>
    <p>{`${property.city}, ${property.state}  ${property.zip}`}</p>
    <RentalDetailsContainer>
      <p>Rents Due: {property.dayRentDue}</p>
      <p>Units: {property.numOfUnits}</p>
      <p>total Rent: ${property.totalRent}</p>
    </RentalDetailsContainer>
  </InfoContainer>
  <InfoContainer>
    <HeaderContainer>
      <h2>Tasks</h2>
      <Link style={linkStyle} to={`/`}> ➕ </Link>
    </HeaderContainer>
  </InfoContainer>
  <TenantListContainer>
    <HeaderContainer>
      <h2>Tenants</h2>
      <Link style={linkStyle} to={`/tenantadd/${id}`}> ➕ </Link>
    </HeaderContainer>
    {tenantJsx}
  </TenantListContainer>
  </Container>
  )
}

const ConfirmDelete = ({ cancelDelete, confirmDelete, user, propId }) => {
  return (
    <ConfirmDeleteDiv>
      <h3>Confirm Delete</h3>
      <ButtonConfirmContainer>
        <ConfirmButtons onClick={() => confirmDelete(user, propId)}>Yes</ConfirmButtons>
        <ConfirmButtons onClick={() => cancelDelete()}>No</ConfirmButtons>
      </ButtonConfirmContainer>
    </ConfirmDeleteDiv>
  )
}

const linkStyle = {
  color: "black",
  underline: "none", 
  "textDecoration": "none",
  "backgroundColor": "white", 
  'padding': "12px"
} 

const PropertyDetails = ({ user }) => {
  const { id } = useParams()

  const [property, setProperty] = useState({})
  const [tenants, setTenants] = useState([])
  const [deleteClicked, setDeleteClicked] = useState(false)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const retrieveProperty = async (user, id) => {
      let res = await getAProperty(user, id)
      let propertyData = res.data.property
      setProperty(propertyData)
    }

    retrieveProperty(user, id)
  }, [])

  useEffect(() => {
    const retrieveTenants = async (user, id) => {
      let res = await getAllTenants(user, id)
      let tenantResponse = res.data.tenants
      console.log(tenantResponse)
      setTenants(tenantResponse)
    }
    retrieveTenants(user, id)
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const onDeleteClicked = () => {
    setDeleteClicked(true)
  }

  const cancelDelete = () => {
    console.log(deleteClicked)
    setDeleteClicked(false)
    console.log(deleteClicked)
  }

  const confirmDelete = async (user, propId) => {
    console.log('clicked')
    let res = await deleteAProperty(user, propId)
    console.log(res)
    setDeleted(true)
  }

  if (deleted) {
    return <Navigate to="/properties" />
  }

  const tenantJsx = tenants.map((tenant, index) => (
    <TenantContainer key={tenant._id}>
        <h6>{index + 1}.</h6>
        <h6>{tenant.firstName}</h6>
        <h6>{tenant.lastName}</h6>
        <h6>tenant info</h6>
        <Link to={`/tenant/${tenant._id}`} style={linkStyle}>•••</Link>
    </TenantContainer>
  ))

  return (
    <Container>
      {deleteClicked ?  <ConfirmDelete user={user} propId={id} cancelDelete={cancelDelete} confirmDelete={confirmDelete}/> : <NormalUI id={id} property={property} onDeleteClicked={onDeleteClicked} tenantJsx={tenantJsx}/> }
    </Container>
  )
}

export default PropertyDetails