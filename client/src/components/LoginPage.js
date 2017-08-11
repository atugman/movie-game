import React from 'react'
import ExistingUserLoginForm from './ExistingUserLoginForm'
import CreateUserForm from './CreateUserForm'
import {fetchCreateUser, fetchLogin} from '../actions'
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  handleSubmit = (values) => {
    this.props.dispatch(fetchLogin(values.existingUsername, values.existingPassword))
  }

  submitNewUser = (values) => {
    console.log(values);
    this.props.dispatch(fetchCreateUser(values.firstName, values.lastName, values.username, values.password))
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 create-user-form">
            <CreateUserForm onSubmit={this.submitNewUser}/>
          </div>
          <div className="col-6 existing-user-login-form">
            <ExistingUserLoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(LoginPage)
