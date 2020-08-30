import React, { useEffect } from 'react'

import { logout } from '../../services/auth.service'
import { Redirect } from "react-router-dom";

export const Logout = () => {

  useEffect(() => {
    logout()
      .then(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      })
  }, [])

  return (
    <Redirect to='/'/>
  );
}
