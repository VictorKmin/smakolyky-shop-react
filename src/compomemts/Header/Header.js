import React from 'react'
import { Link } from "react-router-dom";

import './Header.css'

export const Header = () => {
  const isLogged = localStorage.getItem('access_token')

  return (
    <>
      {
        !isLogged && <Link to='/login'>
          <div className={ 'main-button' }>
            Go to logenidze
          </div>
        </Link>
      }
      {
        !isLogged && <div className={ 'main-button' }>
          <Link to={ '/register' }>
            Go to register
          </Link>
        </div>
      }
      {
        isLogged && <div className={ 'main-button' }>
          <Link to={ '/logout' }>
            Logout
          </Link>
        </div>
      }
    </>
  )
}
