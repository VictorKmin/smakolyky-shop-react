import React from 'react';

import { Button } from '@material-ui/core'

export const FormSubmitButton = ({ children }) => {
  return (
    <Button
      as='input'
      type='submit'
      color='primary'
    >
      {children}
    </Button>
  )
}
