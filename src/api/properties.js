import axios from 'axios'
import apiUrl from '../apiConfig'

// Create a prop
export const createAProperty = (user, propertyData) => {
    return axios.post(apiUrl + '/property/', 
    {
      property: propertyData
    }, 
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read a prop
export const getAProperty = (user, id) => {
    return axios.get(apiUrl + `/property/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Read all props (of a single user)
export const getAllProperties = (user) => {
    return axios.get(apiUrl + '/property/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Delete a prop
export const deleteAProperty = (user, id) => {
    return axios.delete(apiUrl + `/property/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// Edit a prop 
export const editAProperty = (user, id, formData) => {
    return axios.patch(apiUrl + `/property/${id}`, 
    {
      property: formData
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

//Create a task 
export const addATask = (user, id, formData) => {
  return axios.patch(apiUrl + `/propertytask/${id}`, {
    task: formData
  },
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}


//Delete a task 
export const deleteATask = (user, id, taskId) => {
  return axios.delete(apiUrl + `/propertytask/${id}/${taskId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

//Update a task 
export const updateATask =  (user, id, formData) => {
  return axios.patch(apiUrl + `/propertytask/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}