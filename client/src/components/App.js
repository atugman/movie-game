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
fetchData2} from '../actions'


import rootReducer from '../reducers/index'
import { connect } from 'react-redux';
import store from '../store'

class App extends Component {

  constructor() {
    super();


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchData(this.state))
  // }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
    console.log(this.state.userInput);
    // if (event.target.value[0] !== this.state.relevantLetter) {
    //   alert("Hey! You can't change that first letter! Put that " + this.state.relevantLetter + " back in there! Nice try pal!"),
    //   this.setState({
    //     userInput: this.state.relevantLetter
    //   })
    // }
  }

      handleSubmit(event) {
        event.preventDefault()
        let inputVal = this.state.userInput//event.target.userInput.value
        //document.getElementById("hi").className = "animated slideInRight"
        //prevents using the same movie twice
        let splitString = inputVal.toUpperCase('').split(' ');
        if (splitString.includes("THE")) {
          for (var i = 0; i < splitString.length; i++) {
            if (splitString[0] = "THE") {
              alert('Nice try...you know what you did... :)'),
              this.props.dispatch(newGame())
            }
          }
        } else if (this.props.usedMovies.includes(inputVal)) {
            console.log('usedMovies ', this.props.usedMovies);
            alert('Hey! You already used that one! Game over pal!'),
            this.props.dispatch(newGame());
        }
          //if movie title is multiple words, the next movie must
          //use the first letter of the last word of original movie
          else if (inputVal.includes(' ')) {
            this.props.dispatch(fetchData(inputVal));
            console.log(this.props.relevantLetter);
            //event.target.value = this.state.userInput;
          } else {
            //if movie is one word, use last letter for next turn
            this.props.dispatch(fetchData2(inputVal));
            //event.target.value = this.state.userInput;
          }
          event.preventDefault();
        }

  render() {
return (
      <div className="App">
        <div className="App-header animated slideInRight">
          <img src={vhs} className="App-logo" alt="logo" />
          <h2 className='animated bounce'>The Movie Game!</h2>
        </div>
        <p className="App-intro">
          Type the name of a movie into the box that starts with the specified letter!
        </p>

        <form onSubmit={this.handleSubmit}>
           <label>
             Movie:
             <input name="userInput" type="text" value={this.props.userInput} onChange={this.handleChange} />
           <input type="submit" value="Submit" />
           </label>
           {/* <input type="submit" value="Submit" /> */}
         </form>

         <div className="App-intro">
           <div className="score">Score: {this.props.score}</div>
           <div className="row" id="hello">
             <div id="hey" className="col-8">
               <div className="movie-title">{this.props.movieTitle}</div>
               <div className="overview">{this.props.overview}</div>
             </div>
             <div id="hi" className="col-4">
               <img className="Poster img-responsive" src={this.props.poster}/>
            </div>
          </div>
           <img className="Backdrop img-responsive" src={this.props.backdrop}/>
           {/* {this.state.map((movie, index) => (
             <li key={index}>{movie.movies.results[0].title}</li>
           ))} */}
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
    relevantLetter: state.movieData.relevantLetter
});

export default connect(mapStateToProps)(App);
