const initialState = {
  loading: false,
  data: []
}

const movieData = (state = [], action) => {
  if (action.type === 'REQUEST_DATA') {
    return {
      ...state,
      loading: true,
      input: action.movies.results[0].title
    }
  } else if (action.type === 'RECEIVE_DATA') {
    let input = action.data.results[0].title
    let removeDigits = /[0-9]/g
    let highRegString = input.toUpperCase().replace(removeDigits, '');
    let splitString = highRegString.split(' ');
    if (splitString.includes('')) {
      splitString.splice(-1, 1);
    }
    let lastWord = splitString[splitString.length -1];
    let firstLetterOfLastWord = lastWord[0];
    return {
      ...state,
      // movies: //movies,
      movieTitle: action.data.results[0].title,
      overview: action.data.results[0].overview,
      backdrop: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].backdrop_path,
      poster: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].poster_path,
      userInput: firstLetterOfLastWord,
      score: state.score+1,
      usedMovies: state.usedMovies + ' ' + input,
      relevantLetter: firstLetterOfLastWord
    }
  } else if (action.type === 'RECEIVE_DATA2') {
    let input = action.data.results[0].title
    console.log('INPUT ', input);
    let removeDigits = /[0-9]/g
    let highRegString = input.toUpperCase().replace(removeDigits, '');
    let splitString = highRegString.split(' ');
    if (splitString.includes('')) {
      splitString.splice(-1, 1);
    }
    let lastWord = splitString[splitString.length -1];
    let firstLetterOfLastWord = lastWord[0];
    return {
      ...state,
      // movies: //movies,
      movieTitle: action.data.results[0].title,
      overview: action.data.results[0].overview,
      backdrop: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].backdrop_path,
      poster: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].poster_path,
      userInput: firstLetterOfLastWord,
      score: state.score+1,
      usedMovies: state.usedMovies + ' ' + input,
      relevantLetter: firstLetterOfLastWord
    }
  }
    return state
  }


export default movieData