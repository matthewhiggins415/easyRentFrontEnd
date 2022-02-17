import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { getATenant, deleteATenant } from '../../api/tenant'
import { Navigate } from 'react-router'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const ConfirmDeleteContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TenantDetailsContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const ConfirmDeleteBtn = styled.button`
  border: 1px solid black;
  background-color: white;
  outline: none; 
  width: 40%;
  padding: 10px;
  margin: 10px auto;
  cursor: pointer;
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
      <TenantDetailsContainer>
        <p>{`${tenant.firstName} ${tenant.lastName}`}</p> 
        <p>📪 {tenant.email}</p>
        <p>📞 {tenant.phone}</p>
        <p>Monthly Rent: ${tenant.rentAmount}</p>
        <p>Rent Due: {tenant.rentDate}</p>
      </TenantDetailsContainer>
    </Container>
  )
}

const ConfirmDelete = ({ setShouldDelete, setIsDeleted, user, id }) => {
  const handleClick = () => {
    setShouldDelete(false)
  } 

  const handleConfirm = async (user, id) => {
    console.log('confirm clicked')
    try {
      await deleteATenant(user, id)
      setIsDeleted(true)
    } catch (error) {
      console.error()
    }
  }

  return (
    <ConfirmDeleteContainer>
      <h1>Confirm Delete</h1>
      <ConfirmDeleteBtn onClick={handleClick}>Cancel</ConfirmDeleteBtn>
      <ConfirmDeleteBtn onClick={() => handleConfirm(user, id)}>Confirm</ConfirmDeleteBtn>
    </ConfirmDeleteContainer>
  )
}

const TenantDetails = ({ user }) => {
  const [tenant, setTenant] = useState({})
  const [shouldEdit, setShouldEdit] = useState(false)
  const [shouldDelete, setShouldDelete] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
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

  if (isDeleted) {
    return <Navigate to={`/properties`}/>
  }

  return (
    <>
    { shouldDelete ? <ConfirmDelete user={user} id={id} setIsDeleted={setIsDeleted} setShouldDelete={setShouldDelete} /> : <StandardUI user={user} tenant={tenant} id={id} onEdit={onEdit} onDelete={onDelete}/> }
    </>
  )
}

export default TenantDetails