import axios from 'axios'
import apiUrl from '../apiConfig'

// Create a tenant
export const createATenant = ( user, tenant) => {
    return axios.post(apiUrl + '/tenant/', 
    {
      tenant: tenant
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read a tenant
export const getATenant = (user, id) => {
    return axios.get(apiUrl + `/tenant/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read all tenants (of a single prop)
export const getAllTenants = (user, id) => {
    return axios.get(apiUrl + `/tenants/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

//Get all tenants for a user 
export const getUsersTenants = (user) => {
  return axios.get(apiUrl + `/tenants`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Delete a tenant
export const deleteATenant = (user, id) => {
    return axios.delete(apiUrl + `/tenant/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Edit a tenant 
export const editATenant = (user, data, id) => {
    return axios.patch(apiUrl + `/tenant/${id}`, 
    {
      tenant: data
    }, 
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
