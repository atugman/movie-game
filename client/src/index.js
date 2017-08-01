import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import App from './components/App'
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Homepage} />
      <Route path='/Game' component={App} />
      <Route path='/login' component={LoginPage} />
    </Router>
  </Provider>,


  document.getElementById('root')
);
