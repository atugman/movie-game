import React from 'react';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import App from './App'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Main = () => (
  <Router>
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Game' component={App} />
      <Route exact path='/login' component={LoginPage} />
    </div>
  </Router>
)

export default Main
