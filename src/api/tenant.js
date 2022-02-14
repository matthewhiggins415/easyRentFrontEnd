import axios from 'axios'
import apiUrl from '../apiConfig'

// Create a tenant
export const createATenant = user => {
    return axios.post(apiUrl + '/tenant/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read a tenant
export const getATenant = user => {
    return axios.get(apiUrl + '/tenant/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read all tenants (of a single user)
export const getAllTenants = (user, id) => {
    return axios.get(apiUrl + `/tenants/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Delete a tenant
export const deleteATenant = user => {
    return axios.delete(apiUrl + '/tenant/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Edit a tenant 
export const editATenant = user => {
    return axios.patch(apiUrl + '/tenant/:id', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
