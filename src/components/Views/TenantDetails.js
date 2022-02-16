import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { getATenant } from '../../api/tenant'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const TenantDetails = ({ user }) => {
  const [tenant, setTenant] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const retrieveATenant = async (user, id) => {
      let res = await getATenant(user, id)
      console.log(res)
      let tenantData = res.data.tenant
      setTenant(tenantData)
    }

    retrieveATenant(user, id)
  }, [])


  return (
    <Container>
      <h1>Tenant Details</h1>
      <p>{tenant.firstName}</p> 
    </Container>
  )
}

export default TenantDetails