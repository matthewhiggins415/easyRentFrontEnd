import React, { useState } from 'react'
import styled from 'styled-components'

const DIV = styled.div`
  width: 400px;
  height: 400px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  border: 1px solid black; 
  border-radius: 10px;
`

const FORM = styled.form`
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
`
const INPUT = styled.input`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
  background-color: white;
`
const BUTTON = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onRegister = async (event) => {
    event.preventDefault()
    try {

    } catch (error) {
      
    }
  }

  return (
    <DIV>
      <h1>Register</h1>
      <FORM onSubmit={}>
        <INPUT 
          placeholder="email" 
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <INPUT 
          placeholder="password" 
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <INPUT 
          placeholder="confirm password" 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        <BUTTON>Sign Up</BUTTON>
      </FORM>
    </DIV>
  )
}

export default Register 