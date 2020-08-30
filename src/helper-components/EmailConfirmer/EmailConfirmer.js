import React, {useEffect} from 'react';

import {confirmEmail} from '../../services/auth.service'

export const Confirmator = (props) => {
  const { match: {params: {token}} } = props;

  useEffect(() => {
    async function sendConfirm () {
      const r = await confirmEmail(token)
      console.log(r);
    }

    sendConfirm()
  })

  console.log(token);



  return (
    <div>
      HELLO
    </div>
  )
}
