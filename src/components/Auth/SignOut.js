import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { signOut } from '../../api/auth'

const SignOut = ({ user, clearUser }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    const performSignOut = async () => {
      await signOut(user)
      clearUser()
      setShouldNavigate(true)
    }
    performSignOut()
  }, [])

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return ''
}

export default SignOut 