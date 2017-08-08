import React from 'react';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import App from './App'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const Main = ({ isLoggedIn, loggedOut }) => (
  <Router>
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Game' component={App} />
      <Route exact path='/login' component={LoginPage} />
      <div>
        {isLoggedIn ? <Redirect to="/Game" /> : ''}
        {loggedOut ? <Redirect to="/" /> : ''}
      </div>
    </div>
  </Router>
)

const mapStateToProps = (state) => {
  console.log(state.movieData);
  return {
    isLoggedIn: state.movieData.isLoggedIn,
    loggedOut: state.movieData.loggedOut
  }
}

export default connect(mapStateToProps)(Main)
