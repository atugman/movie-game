import React from 'react'
import LoginForm from './LoginForm'
import {fetchCreateUser} from '../actions'
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
    //dispatch post request to create user
    //pass it the username/password etc as params
    this.props.dispatch(fetchCreateUser(values.firstName, values.lastName, values.username, values.password))
  }
  render() {
    return (
      <div>
        <h1>hey</h1>
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect()(LoginPage)
