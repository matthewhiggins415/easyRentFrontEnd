import axios from 'axios'
import apiUrl from '../apiConfig'

// Create stripe account for a Connected Express Stripe Account for user
export const createAccount = (user) => {
  let id = user._id
  return axios.post(apiUrl + `/landlord/${id}/stripe/create`,  {},
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// route for creating an accountLink 
export const createAccountLink = (user) => {
  let id = user._id
  return axios.post(apiUrl + `/landlord/${id}/stripe/accountLink`, {}, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Route for retrieving the Stripe account of a User 
export const getStripeAccount = (user) => {
  return axios.get(apiUrl + `/landlord/${user._id}/stripe/account`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}