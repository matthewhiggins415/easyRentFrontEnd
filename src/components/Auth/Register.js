import React from 'react'
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
 return (
   <DIV>
    <h1>Register</h1>
    <FORM>
        <INPUT placeholder="email"/>
        <INPUT placeholder="password"/>
        <INPUT placeholder="confirm password"/>
        <BUTTON>Sign Up</BUTTON>
    </FORM>
   </DIV>
 )
}

export default Register 