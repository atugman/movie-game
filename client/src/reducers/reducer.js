const initialState = {
  movies: [],
  userInput: 'A',
  usedMovies: '',
  relevantLetter: 'A',
  showInfoModal: false
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
          relevantLetter: 'A',
          movieTitle: '',
          overview: '',
          backdrop: '',
          poster: ''
        }
    } else if (action.type === 'TOGGLE_INFO_MODAL') {
      return {
        ...state,
        showInfoModal: !state.showInfoModal
      }
    }
    return state;
};
