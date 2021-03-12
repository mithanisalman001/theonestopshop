import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Login" component={Login} />
  </Switch>
)
export default App;
