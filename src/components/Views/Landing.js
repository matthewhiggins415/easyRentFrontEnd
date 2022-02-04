import React from 'react'
import styled from 'styled-components'

const DIV = styled.div`
  height: 400px;
  width: 400px; 
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black
`

const Landing = () => {
  return (
    <DIV>
      <h1>easyRent</h1>
      <p>Simply collect payments from your tenants..</p>
    </DIV>
  )
}

export default Landing 