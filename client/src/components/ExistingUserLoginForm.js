import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './LoginPage.css'


let ExistingUserLoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      <table className="existing-user-login-table">
        <tbody>
          <tr>
            <th>Existing Users</th>
          </tr>
          <tr>
            <Field
              className="field"
              name="existingUsername"
              component="input"
              type="text"
              placeholder="Username"/>
          </tr>
          <tr>
            <Field
              className="field"
              name="existingPassword"
              component="input"
              type="password"
              placeholder="Password"/>
          </tr>
        </tbody>


      <div className="login-page-buttons">
      {/* <Link to="game"> */}
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      {/* </Link> */}
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </table>
    </form>
  )
}

const UserLoginForm = reduxForm({
  form: 'contact'
})(ExistingUserLoginForm)

export default connect()(UserLoginForm)
