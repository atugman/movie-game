import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import {Link} from 'react-router'


let ExistingUserLoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit } >
      <div>Existing Users<br></br>
        <label>Username</label>
        <div>
          <Field name="existingUsername" component="input" type="text" placeholder="Username"/>
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field name="existingPassword" component="input" type="password" placeholder="Password"/>
        </div>
      </div>

      <div>
      {/* <Link to="game"> */}
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      {/* </Link> */}
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

const UserLoginForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ExistingUserLoginForm)

export default connect()(UserLoginForm)
