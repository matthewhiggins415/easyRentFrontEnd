import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUsersTenants } from '../../api/tenant'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const TenantContainer = styled.div`
  margin: 6px auto;
  display: flex;
  border: 1px solid black;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`

const H1 = styled.h1`
  width: 90%;
  margin: 40px auto;
`

const linkStyle = {
    color: "black",
    underline: "none", 
    "textDecoration": "none",
    "backgroundColor": "white", 
    'padding': "12px"
  } 

const Tenants = ({ user }) => {
  const [tenants, setTenants] = useState([])

  useEffect(() => {
    const retrieveAllTenants = async () => {
      let res = await getUsersTenants(user)
      let tenantList = res.data.tenants
      console.log(tenantList)
      setTenants(tenantList)
    }
    retrieveAllTenants(user)
  }, [])

  const tenantJsx = tenants.map((tenant, index) => (
    <TenantContainer key={tenant._id}>
        <h6>{index + 1}.</h6>
        <h6>{tenant.firstName}</h6>
        <h6>{tenant.lastName}</h6>
        <h6>tenant info</h6>
        <Link to="/" style={linkStyle}>•••</Link>
    </TenantContainer>
  ))

  return (
    <Container>
        <H1>Tenants</H1>
        { tenantJsx }
    </Container>
  )
}

export default Tenants 