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
`

const TenantContainer = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
    padding: 0px 10px;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    overflow: scroll;
`

const ContainerHeader = styled.div`
  width: 90%;
  margin: 0 auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <ContainerHeader>
        <h1>Tenants</h1>
      </ContainerHeader>
      { tenantJsx }
    </Container>
  )
}

export default Tenants 