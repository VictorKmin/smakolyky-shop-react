import React from 'react';

import { register } from '../../services/auth.service'

export const Register = () => {

  const [values, setValues] = React.useState({
    age: 18,
    email: 'victor.fzs10@gmail.com',
    gender: 'male',
    name: 'Viktor',
    surname: 'Govnokoder',
    password: 'GRLpwr22!',
    phone: '+38067676767'
  });

  const handleChange = (type) => (e) => {
    setValues({ ...values, [type]: e.target.value})

    console.log(values);
  }

  const genderChange = (e) => {
    setValues({ ...values, gender: e.target.value })
  }

  const formSubmit = async (e) => {
    let newVar = await register(values);
    console.log(newVar);
  }

  return (
    <form>
      <input
        type='age'
        placeholder='18'
        onChange={ handleChange('age') }
      />

      <br/>

      <input
        type="text"
        placeholder='Name'
        onChange={ handleChange('name') }/>

        <br/>

      <input
        type="text"
        placeholder='Surname'
        onChange={ handleChange('surname') }/>

      <br/>

      <input type="radio" name='gender' value='male' defaultChecked onClick={genderChange}/> Male
      <input type="radio" name='gender' value='female' onClick={genderChange}/> Female

      <br/>

      <input
        type='email'
        placeholder='example@mail.com'
        onChange={ handleChange('email') }
      />

      <br/>

      <input
        type='text'
        placeholder='_3806767676767'
        onChange={ handleChange('phone') }
      />

      <br/>

      <input
        type='text'
        placeholder='*********'
        onChange={ handleChange('password') }
      />

      <br/>

      <input type='submit' onClick={ formSubmit }/>
    </form>
  )
}
