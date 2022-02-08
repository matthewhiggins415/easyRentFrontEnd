import axios from 'axios'
import apiUrl from '../apiConfig'

// Create a prop
export const createAProperty = user => {
    return axios.post(apiUrl + '/property/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read a prop
export const getAProperty = user => {
    return axios.get(apiUrl + '/property/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read all props (of a single user)
export const getAllProperties = user => {
    return axios.get(apiUrl + '/property/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Delete a prop
export const deleteAProperty = user => {
    return axios.delete(apiUrl + '/property/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Edit a prop 
export const editAProperty = user => {
    return axios.patch(apiUrl + '/property/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}