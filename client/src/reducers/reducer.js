const initialState = {
  movies: [],
  userInput: 'A',
  relevantLetter: 'A',
  showInfoModal: false
};

const mainReducer = (state, action, inputVal) => {
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
    } return state;
};

export default mainReducer
