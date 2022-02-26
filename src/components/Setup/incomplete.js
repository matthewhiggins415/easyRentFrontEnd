import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Incomplete = () => {
  return (
    <div>
      <h1>Your onboarding is incomplete ❌</h1>
      <p>Hit the link below to pick up where you left off</p>
      <p>You cannot accept payments until onboarding is complete.</p>
      <button>Continue</button>
    </div>
  )
}

export default Incomplete