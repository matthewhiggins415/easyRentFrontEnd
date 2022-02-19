import React from 'react'
import styled from 'styled-components'

const DIV = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
`

const Home = () => {
  return (  
    <DIV>
      <h1>Home</h1>
      <h1># of properties</h1>
      <h1># of tenants</h1>
      <h1>total monthly rents collected</h1>
      <h1>Outstanding tasks</h1>
    </DIV>
  )
}

export default Home