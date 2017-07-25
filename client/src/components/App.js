import React, { Component } from 'react';
//import logo from './logo.svg';
import vhs from './vhs.png'
import './App.css';
//import '../node_modules/animate.css/animate.min.css'
import {newGame,
receiveData,
receiveData2,
input,
fetchData,
fetchData2
} from '../actions'
import SimpleForm from './MovieForm'
import ScoresTable from './ScoresTable'
import getScores from './ScoresTable'
import { Field, reduxForm } from 'redux-form';
import rootReducer from '../reducers/index'
import { connect } from 'react-redux';
import store from '../store'
//import InfoModal from './InfoModal'
import Header from './Header'
import backdrop from './backdrop.jpg'

class App extends Component {

  constructor() {
    super();
  }

      // handleSubmit(event) {
      //   event.preventDefault()
      //   console.log('hello');
        // let inputVal = this.state.firstName//event.target.userInput.value
        // console.log(inputVal);
        // //document.getElementById("hi").className = "animated slideInRight"
        // //prevents using the same movie twice
        // let splitString = inputVal.toUpperCase('').split(' ');
        // if (splitString.includes("THE")) {
        //   for (var i = 0; i < splitString.length; i++) {
        //     if (splitString[0] = "THE") {
        //       alert('Nice try...you know what you did... :)'),
        //       this.props.dispatch(newGame())
        //     }
        //   }
        // } else if (this.props.usedMovies.includes(inputVal)) {
        //     console.log('usedMovies ', this.props.usedMovies);
        //     alert('Hey! You already used that one! Game over pal!'),
        //     this.props.dispatch(newGame());
        // }
        //   //if movie title is multiple words, the next movie must
        //   //use the first letter of the last word of original movie
        //   else if (inputVal.includes(' ')) {
        //     this.props.dispatch(fetchData(inputVal));
        //     console.log(this.props.relevantLetter);
        //     //event.target.value = this.state.userInput;
        //   } else {
        //     //if movie is one word, use last letter for next turn
        //     this.props.dispatch(fetchData2(inputVal));
        //     //event.target.value = this.state.userInput;
        //   }
        //}

        submit = (values) => {
          // print the form values to the console
          console.log(values)
        }



  render() {
    const { onSubmit } = this.props;
    return (
      <div className="App">
        <img className="Background" src={require('./backdrop.jpg')}></img>
        <Header infoModal={this.props.showInfoModal}/>
        {/* <div className="App-header animated slideInRight">
          <img src={vhs} className="App-logo" alt="logo" />
          <h2 className='animated bounce'>The Movie Game!</h2>
        </div>
        <p className="instructions">
          Type the name of a movie into the box that starts with the specified letter!
        </p> */}


        <SimpleForm onSubmit={this.submit}/>
        <ScoresTable />


         <div className="App-intro">
           <div className="score">Score: {this.props.score}</div>
           <div className="row" id="hello">
             <div id="hey" className="col-8">
               <div className='random'>
                 <img className="Backdrop img-responsive" src={this.props.backdrop}/>
               </div>
               <div className="movie-title">{this.props.firstName}</div>
               <div className="overview">{this.props.overview}</div>
             </div>
             <div id="hi" className="col-4">
               <img className="Poster img-responsive" src={this.props.poster}/>
            </div>
          </div>
         </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    usedMovies: state.movieData.usedMovies,
    movieTitle: state.movieData.movieTitle,
    overview: state.movieData.overview,
    poster: state.movieData.poster,
    backdrop: state.movieData.backdrop,
    score: state.reducer.score,
    userInput: state.movieData.userInput,
    usedMovies: state.reducer.usedMovies,
    relevantLetter: state.movieData.relevantLetter,
    showInfoModal: state.reducer.showInfoModal,
    // firstName: state.form.simple.values.firstName
});

App = reduxForm({
  form: 'movieForm'
})(App);

export default connect(mapStateToProps)(App);
