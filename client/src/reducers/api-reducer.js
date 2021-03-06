const initialState = {
  data: [],
  relevantLetter: 'A',
  username: '',
  userScore: '',
  users: [],
  score: 0,
  loggedInUser: '',
  message: '',
  usedMovies: [],
  isLoggedIn: false,
  loggedOut: false,
  overview: '',
  movieTitle: 'Your movie will appear here!'
}

const movieData = (state, action) => {
  state = state || initialState;
  if (action.type === 'REQUEST_DATA') {
    return {
      ...state,
      loading: true,
      api: state.api+1
    }
  } else if (action.type === 'RECEIVE_MULTI_WORD_MOVIE_DATA') {
    let movieTitleFromAPI = action.data.results[0].title.toUpperCase()
    let removeDigits = /[0-9]/g
    let highRegString = movieTitleFromAPI.toUpperCase().replace(removeDigits, '');
    let splitString = highRegString.split(' ');
    if (splitString.includes('')) {
      splitString.splice(-1, 1);
    }
    let lastWord = splitString[splitString.length -1];
    let firstLetterOfLastWord = lastWord[0];
    let userFormInput = action.inputVal.toUpperCase()
    return {
      ...state,
      movieTitle: action.data.results[0].title,
      overview: action.data.results[0].overview,
      backdrop: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].backdrop_path,
      poster: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].poster_path,
      userInput: firstLetterOfLastWord,
      score: state.score+1,
      usedMovies: [...state.usedMovies, userFormInput],
      relevantLetter: firstLetterOfLastWord
    }
  } else if (action.type === 'RECEIVE_SINGLE_WORD_MOVIE_DATA') {
    let movieTitleFromAPI = action.data.results[0].title.toUpperCase()
    let removeDigits = /[0-9]/g
    let highRegString = movieTitleFromAPI.toUpperCase().replace(removeDigits, '');
    let lastLetterOfWord = highRegString[highRegString.length -1];
    let userFormInput = action.inputVal.toUpperCase()
    return {
      ...state,
      movieTitle: action.data.results[0].title,
      overview: action.data.results[0].overview,
      backdrop: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].backdrop_path,
      poster: 'https://image.tmdb.org/t/p/w500' + action.data.results[0].poster_path,
      userInput: lastLetterOfWord,
      score: state.score+1,
      usedMovies: [...state.usedMovies, userFormInput],
      relevantLetter: lastLetterOfWord
    }
  } else if (action.type === 'NEW_GAME') {
    return {
      ...state,
      users: action.users.users,
      movies: [],
      score: 0,
      usedMovies: '',
      relevantLetter: 'A',
      movieTitle: 'Your movie will appear here!',
      overview: '',
      backdrop: '',
      poster: '',
      isLoggedIn: false,
      savedScore: 0,
      currentScore: 0
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
      score: 0,
      movieTitle: 'Your movie will appear here!'
    }
  } else if (action.type === 'RECEIVE_LOGOUT') {
    return {
      ...state,
      loggedOut: true,
      isLoggedIn: false,
      data: [],
      movieTitle: 'Your movie will appear here!',
      backdrop: '',
      relevantLetter: 'A',
      username: '',
      userScore: '',
      users: [],
      score: 0,
      loggedInUser: '',
      message: '',
      usedMovies: ' ',
      overview: '',
    }
  } else if (action.type === 'SAVE_SCORE_ON_CLICK') {
    return {
      ...state,
      savedScore: action.score
    }
  } else if (action.type === 'LOAD_SAVED_SCORE') {
    return {
      ...state,
      score: state.savedScore
    }
  } else if (action.type === 'RECEIVE_AUTHENTICATED_USER') {
    return {
      ...state,
      loggedInUser: action.user.username
    }
  }
  else {
    return state
  }
}

export default movieData
