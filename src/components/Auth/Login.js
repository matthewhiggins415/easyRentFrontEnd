import React, { useState } from 'react'
import styled from 'styled-components'
import { signIn } from '../../api/auth'

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

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = async () => {
    e.preventDefault()
    try {
      const res = await signIn(email, password)
      console.log(res)
      setUser(res.data.user)    
    } catch (e) {
      setEmail('')
      setPassword('')
      console.log(`error: ${error}`)
    }
  }

  return (
    <DIV>
      <h1>Login</h1>
      <FORM onSubmit={onSignIn}>
        <INPUT 
          placeholder="email" 
          value={email} 
          onChange={event => setEmail(event.target.value)} 
          name="email" 
          required>
        </INPUT>
        <INPUT 
          placeholder="password" 
          value={password} 
          onChange={event => setPassword(event.target.value)} 
          name="password" 
          required>
        </INPUT>
        <BUTTON type="submit">Login</BUTTON>
      </FORM>
    </DIV>
  )
}

export default Login 