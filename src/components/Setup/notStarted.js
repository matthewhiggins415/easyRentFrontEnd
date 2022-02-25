import React, {useState, useEffect} from 'react'

const notStarted = () => {
  return (
    <div>
      <h1>Welcome, please complete onboarding process.</h1>
      <p>You will need to complete onboarding to collect payments.</p>
      <button>Begin</button>
    </div>
  )
}

export default notStarted