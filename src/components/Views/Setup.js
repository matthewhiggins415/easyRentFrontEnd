import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { createAccount, createAccountLink, getStripeAccount } from '../../api/stripe'
import Complete from '../../components/complete'
import Incomplete from '../../components/incomplete'
import notStarted from '../../components/notStarted'

const Container = styled.div`
  height: auto;
  width: 90%;
  margin: 0 auto; 
  background-color: blue;
  justify-content: center;
`

const Setup = ({ user }) => {
  const [stripeAccount, setStripeAccount] = useState({})

  useEffect(() => {
    console.log(user)

    const retrieveUsersStripeAccount = async (user) => {
      let res = await getStripeAccount(user)
      setStripeAccount(res.data)
      console.log(res.data)
    }

    retrieveUsersStripeAccount(user)

    // const createStripeAccount = async (user) => {
    //   let res = await createAccount(user)
    //   console.log(res)
    // }

    // const creatAccountLink = async (user) => {
    //   let res = await createAccountLink(user)
    //   console.log(res)
    // }

    // createStripeAccount(user)
    // creatAccountLink(user)
  }, [])

  return (
    <Container>
      <h1>We use Stripe so you can collect payments</h1>
      <p>You will need to fill out information to activate your account</p>
      <button>Begin Onboarding</button>
    </Container>
  )
}

export default Setup 
