import axios from 'axios'
import apiUrl from '../apiConfig'

//Register
export const signUp = (email, password, passwordConfirmation) => {
  console.log(apiUrl)

  return axios.post(apiUrl + '/sign-up', {
    credentials: {
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}
  
  export const signIn = (email, password) => {
    return axios.post(apiUrl + '/sign-in', {
      credentials: {
        email,
        password
      }
    })
  }
  
  export const signOut = (user) => {
    return axios.delete(apiUrl + '/sign-out', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }
  
  export const changePassword = (oldPassword, newPassword, user) => {
    return axios.patch(
      apiUrl + '/change-password',
      {
        passwords: {
          old: oldPassword,
          new: newPassword
        }
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )
  }

  // get a single landlord 
  export const getUser = (user) => {
    return axios.get(apiUrl + `/user/${user._id}`,  
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )
  }

// Edit a landlord 
export const editALandlord = (user, data, id) => {
  return axios.patch(apiUrl + `/user/${id}`, 
  {
    landlord: data
  }, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}