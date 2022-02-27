import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { createAccount, createAccountLink, getStripeAccount } from '../../api/stripe'
import Complete from '../Setup/Complete'
import Incomplete from '../Setup/Incomplete'
import NotStarted from '../Setup/NotStarted'

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

    // const retrieveUsersStripeAccount = async (user) => {
    //   let res = await getStripeAccount(user)
    //   setStripeAccount(res.data)
    //   console.log(res.data)
    // }

    // retrieveUsersStripeAccount(user)

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

  if (!user.stripeId) {
    console.log('no stripe account: create a new one here.')
  }

  const handleBeginOnboarding = () => {
    console.log('begin onboarding btn')
  }

  return (
    <Container>
      <h1>We use Stripe so you can collect payments</h1>
      <p>You will need to fill out information to activate your account</p>
      <button onClick={handleBeginOnboarding}>Begin Onboarding</button>
    </Container>
  )
}

export default Setup 
