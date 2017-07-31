import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import {connect} from 'react-redux'
import {newGame,
fetchData,
fetchData2
} from '../actions'


class SimpleForm extends React.Component {


  componentDidMount() {
      this.props.initialize({ firstName:  this.props.relevantLetter});
      // set the value individually
    }

  // componentWillReceiveProps() {
  //   // this.props.initialize({ firstName:  this.props.relevantLetter});
  //   this.props.dispatch(change('SimpleForm', 'firstName', this.props.relevantLetter));
  // }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    // this.props.fields.firstName.onChange('B')

  return (
    <form onSubmit={ handleSubmit } >
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}
}

const FormComponent = reduxForm({
  form: 'simple'
})(SimpleForm)

export default connect()(FormComponent)
