import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
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
        <button className="login-button" type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </table>
    </form>
  )
}

const UserLoginForm = reduxForm({
  form: 'contact'
})(ExistingUserLoginForm)

export default connect()(UserLoginForm)
