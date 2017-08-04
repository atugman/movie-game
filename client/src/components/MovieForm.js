import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import {connect} from 'react-redux'
import {newGame,
fetchData,
fetchData2
} from '../actions'
import './MovieForm.css'
import SavedScoreBox from './SavedScoreBox'
import SaveButton from './SaveButton'
import LoadButton from './LoadButton'
import CurrentScore from './CurrentScore'

class MovieForm extends React.Component {


  componentDidMount() {
      this.props.initialize({ movie:  this.props.relevantLetter});
      // set the value individually
    }

  // componentWillReceiveProps() {
  //   // this.props.initialize({ movie:  this.props.relevantLetter});
  //   this.props.dispatch(change('MovieForm', 'movie', this.props.relevantLetter));
  // }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    // this.props.fields.movie.onChange('B')

  return (
    <form onSubmit={ handleSubmit } >
      <table>
        <tbody>
          <tr>
            <th>Think of a movie that starts with</th>
          </tr>
          <tr>
            <Field
            className="Field"
            name="movie"
            component="input"
            type="text"
            placeholder="Enter Movie Title Here"/>
          </tr>

        </tbody>


      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>

    </table>
    </form>
  )
}
}

const FormComponent = reduxForm({
  form: 'simple',
  initialValues: { letter: 'T', max: 10 }
})(MovieForm)

export default connect()(FormComponent)
