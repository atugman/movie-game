import React, { Component } from 'react';
import './App.css';

import {fetchNewGame,
  fetchLogin,
  receiveData,
  receiveData2,
  input,
  fetchData,
  fetchData2
} from '../actions'

import MovieForm from './MovieForm'
import ScoresTable from './ScoresTable'
import getScores from './ScoresTable'
import SavedScoreBox from './SavedScoreBox'
import SaveButton from './SaveButton'
import LoadButton from './LoadButton'
import CurrentScore from './CurrentScore'
import LoggedInAs from './LoggedInAs'
import ExistingUserLoginForm from './ExistingUserLoginForm'

import { Field, reduxForm, change } from 'redux-form';

import { connect } from 'react-redux';
import store from '../store'
import Header from './Header'
import backdrop from './backdrop.jpg'

class App extends Component {

  componentWillReceiveProps(nextProps) {
  this.props.dispatch(change('simple', 'movie', nextProps.relevantLetter));
}

  submit = (values) => {
      event.preventDefault()
      let inputVal = values.movie
      //prevents using the same movie twice
      let splitString = inputVal.toUpperCase('').split(' ');
      if (splitString.includes("THE")) {
        console.log('inputVAl ', inputVal);
        for (var i = 0; i < splitString.length; i++) {
          if (splitString[0] = "THE") {
            alert('Nice try...you know what you did... :)'),
            this.props.dispatch(fetchNewGame(this.props.score))
          }
        }
      }
      else if (this.props.usedMovies.includes(inputVal)) {
          console.log('usedMovies ', this.props.usedMovies);
          alert('Hey! You already used that one! Game over pal!'),
          this.props.dispatch(fetchNewGame(this.props.score));
      }

      else if (inputVal[0].toUpperCase() !== this.props.relevantLetter) {
        alert("Hey! That word didn't start with " + this.props.relevantLetter
        + "! Better luck next time bucko!"),
        this.props.dispatch(fetchNewGame(this.props.score));
      }
        //if movie title is multiple words, the next movie must
        //use the first letter of the last word of original movie
        else if (inputVal.includes(' ')) {
          this.props.dispatch(fetchData(inputVal));
        } else {
          //if movie is one word, use last letter for next turn
          this.props.dispatch(fetchData2(inputVal));
        }
      }


  handleSubmit = (values) => {
    this.props.dispatch(fetchLogin(values.existingUsername, values.existingPassword))
  }

  render() {
    return (
      <div className="App">
        <Header infoModal={this.props.showInfoModal}/>
           <div className="row" id="hello">
             <div className="col-3">
               <MovieForm onSubmit={this.submit} relevantLetter={this.props.relevantLetter}/>
               <LoggedInAs />
               <SavedScoreBox currentScore={this.props.score}/>
               <CurrentScore currentScore={this.props.score}/>
               <SaveButton score={this.props.score}/>
               <LoadButton />

             </div>
             <div id="main-box" className="col-6">

               <div className='random'>
                 <img className="Backdrop img-responsive" src={this.props.backdrop}/>
               </div>


               <div className="title-overview-box">
                 <div className="movie-title">{this.props.movieTitle}</div>
                 <div className="overview">{this.props.overview}</div>
               </div>

             </div>
             <div className="col-3">
               <ScoresTable />
             </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    usedMovies: state.movieData.usedMovies,
    movieTitle: state.movieData.movieTitle,
    overview: state.movieData.overview,
    poster: state.movieData.poster,
    backdrop: state.movieData.backdrop,
    score: state.movieData.score,
    userInput: state.movieData.userInput,
    usedMovies: state.movieData.usedMovies,
    relevantLetter: state.movieData.relevantLetter,
    showInfoModal: state.reducer.showInfoModal,
    users: state.movieData.users,
    loggedInUser: state.movieData.loggedInUser,
    savedScore: state.movieData.savedScore
}
};

App = reduxForm({
  form: 'movieForm'
})(App);

export default connect(mapStateToProps)(App);
