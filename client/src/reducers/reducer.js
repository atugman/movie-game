const initialState = {
  movies: [],
  userInput: 'A',
  score: 0,
  usedMovies: '',
  relevantLetter: 'A'
};

export default (state, action, inputVal) => {
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
        relevantLetter: action.payload
      }
    } else if (action.type === 'CHANGE_FIRST_LETTER') {
      return {
        ...state,
        userInput: this.state.relevantLetter
      }//, event.target.userInput.value = this.state.relevantLetter
    }
    return state;
};
