import React, { useEffect, useState } from 'react'
import { getAllProperties } from '../../api/properties'
import PropertyItem from '../Random/PropertyItems'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PropertyContainer = styled.div`
    width: 90%;
    margin: 10px;
    display: flex;
    padding: 0px 10px;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const ContainerHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
    height: 50%; 
    background-color: white;
    padding: 10px;
    outline: none;
    border: none;
    cursor: pointer;
`
const InfoContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  height: auto;
`

const Properties = ({ user }) => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
      const getUsersProperties = async (user) => {
        let propertiesReq = await getAllProperties(user)
        let propertiesObject = propertiesReq.data.properties
        console.log(typeof propertiesObject)
        console.log(propertiesObject)
        setProperties(propertiesObject)
      }
      getUsersProperties(user)        
      console.log('properties:', properties)
    }, [])

    const propertyJsx = properties.map((property, index) => (
        <PropertyContainer key={property._id}>
          <InfoContainer>
            <h6>{index + 1}.</h6>
            <h6>{property.address}</h6>
          </InfoContainer>
          <div>
            <Button onClick={() => { console.log('remove item') }}>•••</Button>
            <Button onClick={() => { console.log('remove item') }}>❌</Button>
          </div>
        </PropertyContainer>
    ))

    return (
        <Container>
          <ContainerHeader>
          <h1>Properties</h1>
          <Button>Add ➕</Button>
          </ContainerHeader>
          {propertyJsx}
        </Container>
    )
}

export default Properties