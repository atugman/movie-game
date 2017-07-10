import {
    INPUT,
    MAKE_MULTI_WORD_GUESS,
    MAKE_ONE_WORD_GUESS,
    CHANGE_FIRST_LETTER
    NEW_GAME
} from './actions';

const initialState = {
  movies: [],
  userInput: 'A',
  score: 0,
  usedMovies: '',
  relevantLetter: 'T'
};

export default (state, action) => {
    state = state || initialState;
    if (action.type === NEW_GAME) {
        return initialState;
    } else if (action.type === INPUT) {



    } else if (action.type === CHANGE_FIRST_LETTER) {



    } else if (action.type) === MAKE_ONE_WORD_GUESS) {



    } else if (action.type) === MAKE_MULTI_WORD_GUESS) {



    }
    return state;
};
