import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './LoginPage.css'

let CreateUserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit } >
      <div className="create-user-table">
        <h2>New Users</h2>
        <tr>
          <td>
            <Field
              className="field"
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"/>
          </td>
        </tr>
        <tr>
          <td>
            <Field
              className="field"
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"/>
          </td>
        </tr>
        <tr>
          <td>
            <Field
              className="field"
              name="username"
              component="input"
              type="text"
              placeholder="Username"/>
          </td>
        </tr>
        <tr>
          <td>
            <Field
              className="field"
              name="password"
              component="input"
              type="password"
              placeholder="Password"/>
          </td>
        </tr>
      <div className="login-page-buttons">
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </div>
    </form>
  )
}

const NewUserForm = reduxForm({
  form: 'contact'
})(CreateUserForm)

export default connect()(NewUserForm)
