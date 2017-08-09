const initialState = {
  loading: false,
  data: [],
  relevantLetter: 'A',
  username: '',
  userScore: '',
  users: [],
  score: 0,
  loggedInUser: '',
  message: '',
  usedMovies: ' ',
  isLoggedIn: false,
  loggedOut: false,
  overview: 'Guess a movie!'
}

const movieData = (state, action) => {
  state = state || initialState;
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
    let removeDigits = /[0-9]/g
    let highRegString = input.toUpperCase().replace(removeDigits, '');
    let lastLetterOfWord = highRegString[highRegString.length -1];
    return {
      ...state,
      movieTitle: action.data.results[0].title,
      overview: action.data.results[0].overview,
      backdrop: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].backdrop_path,
      poster: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].poster_path,
      userInput: lastLetterOfWord,
      score: state.score+1,
      usedMovies: state.usedMovies + ' ' + input,
      relevantLetter: lastLetterOfWord
    }
  } else if (action.type === 'NEW_GAME') {
    return {
      ...state,
      movies: [],
      score: 0,
      usedMovies: '',
      relevantLetter: 'A',
      movieTitle: '',
      overview: '',
      backdrop: '',
      poster: '',
      score: 0,
      isLoggedIn: false
    }
  } else if (action.type === 'RECEIVE_USERS') {
    return {
      ...state,
      users: action.data
    }
  } else if (action.type === 'RECEIVE_LOGIN') {
    return {
      ...state,
      loggedInUser: action.data.user.username,
      savedScore: action.data.user.currentScore,
      message: action.data.message,
      isLoggedIn: true,
      loggedOut: false,
      overview: 'Guess a movie!'
    }
  } else if (action.type === 'RECEIVE_LOGOUT') {
    return {
      ...state,
      loggedOut: true
    }
  } else if (action.type === 'SAVE_SCORE_ON_CLICK') {
    return {
      ...state,
      savedScore: action.score,
    }
  } else if (action.type === 'LOAD_SAVED_SCORE') {
    return {
      ...state,
      score: state.savedScore
    }
  }
  else {
    return state
  }
}

export default movieData
