import React from 'react';
import { Field, reduxForm } from 'redux-form';

// handleSubmit(event) {
//   event.preventDefault()
//   let inputVal = this.state.firstName//event.target.userInput.value
//   console.log(inputVal);
//   //document.getElementById("hi").className = "animated slideInRight"
//   //prevents using the same movie twice
//   let splitString = inputVal.toUpperCase('').split(' ');
//   if (splitString.includes("THE")) {
//     for (var i = 0; i < splitString.length; i++) {
//       if (splitString[0] = "THE") {
//         alert('Nice try...you know what you did... :)'),
//         this.props.dispatch(newGame())
//       }
//     }
//   } else if (this.props.usedMovies.includes(inputVal)) {
//       console.log('usedMovies ', this.props.usedMovies);
//       alert('Hey! You already used that one! Game over pal!'),
//       this.props.dispatch(newGame());
//   }
//     //if movie title is multiple words, the next movie must
//     //use the first letter of the last word of original movie
//     else if (inputVal.includes(' ')) {
//       this.props.dispatch(fetchData(inputVal));
//       console.log(this.props.relevantLetter);
//       //event.target.value = this.state.userInput;
//     } else {
//       //if movie is one word, use last letter for next turn
//       this.props.dispatch(fetchData2(inputVal));
//       //event.target.value = this.state.userInput;
//     }
//     event.preventDefault();
//   }


const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      {/* <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div> */}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
  firstName: state.form.simple.values.firstName
});

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
