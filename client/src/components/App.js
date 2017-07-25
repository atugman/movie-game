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

  submit = (values) => {
    // print the form values to the console
    // This works now so from here you can for example check this console below
    // See that it gets the form values ok.
    // Dispatch a action to do whatever you want once the user submits the form.
    console.log(values)
  }

  render() {
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
