import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { getATenant } from '../../api/tenant'
import { Navigate } from 'react-router'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`
const ContainerHeader = styled.div`
  width: 90%; 
  margin: 0 auto; 
  display: flex;
  justify-content: space-between;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
`

const Button = styled.button`
  padding: 12px;
  border: 1px solid black;
  background-color: white;
  height: 50%;
  border-radius: 10px;
`

const StandardUI = ({ tenant, id, onEdit, onDelete}) => {
  return (
    <Container>
      <ContainerHeader>
        <h1>Tenant Details</h1>
        <ButtonContainer>
          <Button onClick={() => onEdit(id)}>edit</Button>
          <Button onClick={() => onDelete()}>delete</Button>
        </ButtonContainer>
      </ContainerHeader>
      <p>{tenant.firstName}</p> 
      <p>{tenant.lastName}</p>
      <p>{tenant.phone}</p>
      <p>{tenant.rentAmount}</p>
      <p>{tenant.rentDate}</p>
    </Container>
  )
}

const ConfirmDelete = ({ setShouldDelete }) => {
  const handleClick = () => {
    setShouldDelete(false)
  } 

  return (
    <Container>
      <p>Confirm Delete</p>
      <button onClick={handleClick}>back</button>
    </Container>
  )
}

const TenantDetails = ({ user }) => {
  const [tenant, setTenant] = useState({})
  const [shouldEdit, setShouldEdit] = useState(false)
  const [shouldDelete, setShouldDelete] = useState(false)
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

  const onEdit = (id) => {
    console.log('edit clicked')
    setShouldEdit(true)
  }

  const onDelete = () => {
    console.log('delete clicked')
    setShouldDelete(true)
  }

  if (shouldEdit) {
    return <Navigate to={`/tenantedit/${id}`}/>
  }

  return (
    <>
    { shouldDelete ? <ConfirmDelete setShouldDelete={setShouldDelete} /> : <StandardUI user={user} tenant={tenant} id={id} onEdit={onEdit} onDelete={onDelete}/> }
    </>
  )
}

export default TenantDetails