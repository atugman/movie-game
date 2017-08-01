import React from 'react'
import ExistingUserLoginForm from './ExistingUserLoginForm'
import CreateUserForm from './CreateUserForm'
import {fetchCreateUser, fetchLogin} from '../actions'
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  submitLogin = (values) => {
    console.log(values)
    this.props.dispatch(fetchLogin(values.existingUsername, values.existingPassword))
  }

  submitNewUser = (values) => {
    console.log(values);
    this.props.dispatch(fetchCreateUser(values.firstName, values.lastName, values.username, values.password))
  }


  render() {
    return (
      <div>
        <h1>hey</h1>
        <ExistingUserLoginForm onSubmit={this.submitLogin} />
        <CreateUserForm onSubmit={this.submitNewUser}/>
      </div>
    )
  }
}

export default connect()(LoginPage)
