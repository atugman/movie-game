import React from 'react'
import ExistingUserLoginForm from './ExistingUserLoginForm'
import CreateUserForm from './CreateUserForm'
import {fetchCreateUser, fetchLogin} from '../actions'
import { connect } from 'react-redux';
import ReduxSweetAlert from 'react-redux-sweetalert';

class LoginPage extends React.Component {
  handleSubmit = (values) => {
    this.props.dispatch(fetchLogin(values.existingUsername, values.existingPassword))
  }

  submitNewUser = (values) => {
    this.props.dispatch(fetchCreateUser(values.firstName, values.lastName, values.username, values.password, values.confirmPassword))
  }

  render() {
    return (
      <div>
        <img className="Background Background-login-page"></img>
        <div className="row">
          <div className="create-user-form">
            <CreateUserForm onSubmit={this.submitNewUser}/>
          </div>
          <ReduxSweetAlert />
        </div>
        <div className="row">
          <div className="existing-user-login-form">
            <ExistingUserLoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="bottom-row"></div>
      </div>
    )
  }
}

export default connect()(LoginPage)
