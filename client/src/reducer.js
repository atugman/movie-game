const initialState = {
  movies: [],
  userInput: 'A',
  score: 0,
  usedMovies: '',
  relevantLetter: 'A'
};

export default (state, action) => {
    state = state || initialState;
    if (action.type === 'NEW_GAME') {
        return {
          ...state,
          movies: [],
          userInput: 'A',
          score: 0,
          usedMovies: '',
          relevantLetter: 'A'
        }
    } else if (action.type === 'INPUT') {
      return {
        ...state,
        userInput: event.target.value
      }
    } else if (action.type === 'CHANGE_FIRST_LETTER') {
      return {
        ...state,
        userInput: this.state.relevantLetter
      }



    } else if (action.type === 'MAKE_ONE_WORD_GUESS') {
      // let input = movies.results[0].title
      // let removeDigits = /[0-9]/g
      // let highRegString = input.toUpperCase().replace(removeDigits, '');
      // let lastLetterOfWord = highRegString[highRegString.length -1];
      return {
        ...state,
        // movies: movies,
        // movieTitle: movies.results[0].title,
        // overview: movies.results[0].overview,
        // backdrop: 'https://image.tmdb.org/t/p/w500' + movies.results[0].backdrop_path,
        // poster: 'https://image.tmdb.org/t/p/w500' + movies.results[0].poster_path,
        // userInput: lastLetterOfWord,
        // score: this.state.score+1,
        // usedMovies: this.state.usedMovies + ' ' + input,
        // relevantLetter: lastLetterOfWord
      }
    } else if (action.type === 'MAKE_MULTI_WORD_GUESS') {
      // let removeDigits = /[0-9]/g
      // let highRegString = input.toUpperCase().replace(removeDigits, '');
      // let splitString = highRegString.split(' ');
      // if (splitString.includes('')) {
      //   splitString.splice(-1, 1);
      // }
      // let lastWord = splitString[splitString.length -1];
      // let firstLetterOfLastWord = lastWord[0];
      return {
        ...state,
        // movies: movies,
        // movieTitle: movies.results[0].title,
        // overview: movies.results[0].overview,
        // backdrop: 'https://image.tmdb.org/t/p/w500' + movies.results[0].backdrop_path,
        // poster: 'https://image.tmdb.org/t/p/w500' + movies.results[0].poster_path,
        // userInput: firstLetterOfLastWord,
        // score: this.state.score+1,
        // usedMovies: this.state.usedMovies + ' ' + input,
        // relevantLetter: firstLetterOfLastWord
      }
    }
    return state;
};
