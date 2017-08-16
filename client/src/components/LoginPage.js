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
        <img className="Background Background-login-page" src={require('./img/Bane.jpg')}></img>
        <div className="row">
          <div className="create-user-form">
            <CreateUserForm onSubmit={this.submitNewUser}/>
          </div>
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
