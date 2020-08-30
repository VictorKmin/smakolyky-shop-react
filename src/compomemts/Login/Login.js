import React from 'react';

import { login } from '../../services/auth.service'
import { Redirect } from "react-router-dom";

export const Login = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const [isSuccess, setSuccess] = React.useState(false);

  const handleChange = (type) => (e) => {
    setValues({ ...values, [type]: e.target.value })
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    let newVar = await login(values);

    if (newVar.access_token) {
      setSuccess(true)
    }

    localStorage.setItem('access_token', newVar.access_token)
    localStorage.setItem('refresh_token', newVar.refresh_token)

  }

  if (isSuccess) {
    return (
      <Redirect to='/'/>
    )
  }

  return (
    <form>
      <input
        type='email'
        onChange={ handleChange('email') }
      />
      <br/>
      <input
        type='text'
        onChange={ handleChange('password') }
      />
      <br/>
      <input type='submit' onClick={ formSubmit }/>
    </form>


  )
}
