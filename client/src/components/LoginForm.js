import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit } >
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>

      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>

      <div>
        <label>Username</label>
        <div>
          <Field name="username" component="input" type="text" placeholder="Username"/>
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field name="password" component="input" type="password" placeholder="Password"/>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

const UserLoginForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(LoginForm)

export default connect()(UserLoginForm)
