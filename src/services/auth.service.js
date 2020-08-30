import axios from 'axios'

import { config } from '../config'

export const login = async (data) => {
  try {
    const response = await axios.post(`${ config.API_URL }/auth`, data);

    return response.data
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2))
  }
}
export const logout = async () => {
  try {
    const response = await axios.post(`${ config.API_URL }/auth/logout`, {}, {
      headers: {
        'Authorization': localStorage.getItem('access_token')
      }
    });

    return response.data
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2))
  }
}

export const register = async (data) => {
  try {
    const response = await axios.post(`${ config.API_URL }/users`, data)

    return response.data
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2))
  }
}
export const confirmEmail = async (token) => {
  try {
    const response = await axios.post(`${ config.API_URL }/users/confirm`, {}, {
      headers: {
        'Authorization': token
      }
    })

    return response.data
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2))
  }
}
