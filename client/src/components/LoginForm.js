import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={ handleSubmit } >

      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"/>
        </div>
      </div>

      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"/>
        </div>
      </div>

      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"/>
        </div>
      </div>

      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"/>
        </div>
      </div>

      <div>
        <Link to='/game'>
          <button className="login-button" type="submit" disabled={pristine || submitting}>Submit</button>
        </Link>
      </div>

    </form>
  )
}

LoginForm = reduxForm({
  form: 'contact'
})(LoginForm)

export default LoginForm
