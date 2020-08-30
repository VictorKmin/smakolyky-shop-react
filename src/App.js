import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Login } from "./compomemts/Login/Login";
import { Header } from "./compomemts/Header/Header";
import { Register } from "./compomemts/Register/Register";
import { Confirmator } from "./helper-components/EmailConfirmer/EmailConfirmer";
import { Logout } from "./compomemts/Logout/Logout";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Header }/>
        <Route path='/login' component={ Login }/>
        <Route path='/logout' component={ Logout }/>
        <Route path='/register' component={ Register }/>
        <Route path='/email/confirm/:token' component={ Confirmator }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
