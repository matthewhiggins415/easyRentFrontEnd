import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Header/SideNavBar'

const DIV = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  return (
    <>
    <SideNavBar />
    <DIV>
      <p>Home</p>
    </DIV>
    </>
  )
}

export default Home