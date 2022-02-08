
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  height: fit-content;
  align-items: center;
  text-align: center;
  justify-items: center;
`

const PropertyItem = ({ name, address }) => {
  return (
    <Div>
      <h6>{name}</h6>
      <h6>{address}</h6>
    </Div>
  )
}

export default PropertyItem
