import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
// import ReduxSweetAlert from 'react-redux-sweetalert';

ReactDOM.render(
  <Provider store={store}>
    <Main />
    {/* <ReduxSweetAlert /> */}
  </Provider>,
  document.getElementById('root')
);
