import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllProperties } from '../../api/properties'
import { getUsersTenants } from '../../api/tenant'


const DIV = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-evenly;
`

const Card = styled.div`
  background-color: lightgray;
  width: 200px;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = ({ user }) => {
  const [properties, setProperties] = useState([])
  const [tenants, setTenants] = useState([])

  useEffect(() => {
    const getUsersProperties = async (user) => {
      let propertiesReq = await getAllProperties(user)
      let propertiesObject = propertiesReq.data.properties
      console.log(propertiesObject)
      setProperties(propertiesObject)
    }
    getUsersProperties(user)        
  }, [])

  useEffect(() => {
    const retrieveAllTenants = async () => {
      let res = await getUsersTenants(user)
      let tenantList = res.data.tenants
      console.log(tenantList)
      setTenants(tenantList)
    }
    retrieveAllTenants(user)
  }, [])

  return (  
    <DIV>
      <Card>
        <h2>{properties.length}</h2>
        <h2>Properties</h2>
      </Card>
      <Card>
        <h2>{tenants.length}</h2>
        <h2>Tenants</h2>
      </Card>
    </DIV>
  )
}

export default Home