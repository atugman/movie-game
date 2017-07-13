import store from './store'
//try movie action
//if logic in the component
//reducer sets state equal to stuff from server
//new action for each variation of state

//guess where input is multiple words/has a space
export const MAKE_MULTI_WORD_GUESS = 'MAKE_MULTI_WORD_GUESS';
export const makeMultiWordGuess = (guess) => ({
    type: MAKE_MULTI_WORD_GUESS,
    guess
});

//guess where input is all one word
export const MAKE_ONE_WORD_GUESS = 'MAKE_ONE_WORD_GUESS';
export const makeOneWordGuess = (guess) => ({
    type: MAKE_ONE_WORD_GUESS,
    guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => {
  return {type: NEW_GAME}
};

export const CHANGE_FIRST_LETTER = 'CHANGE_FIRST_LETTER';
export const changeFirstLetter = () => ({
    type: CHANGE_FIRST_LETTER
});

export const INPUT = 'INPUT';
export const input = (letter) => ({
    type: INPUT,
    name: 'name',
    payload: letter
});

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => ({
  type: 'REQUEST_DATA',
})

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const receiveData = (data) => ({
  type: 'RECEIVE_DATA',
  data
})

export const RECEIVE_DATA2 = 'RECEIVE_DATA2';
export const receiveData2 = (data) => ({
  type: 'RECEIVE_DATA2',
  data
})

export const fetchData = (inputVal) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('https://api.themoviedb.org/3/search/movie?query=' + inputVal + '&api_key=2301535fa250c0bcc1f89c74b2a2a9b4')
      .then(response => response.json())
      .then(movies => dispatch(receiveData(movies)))
      // .catch(err => {
      //   alert('You lose!')
      //
      //   //NEW_GAME action
      //   dispatch(newGame());
      // })
    }
  }


  export const fetchData2 = (inputVal) => {
    return (dispatch) => {
      dispatch(requestData)
      console.log(inputVal);
      fetch('https://api.themoviedb.org/3/search/movie?query=' + inputVal + '&api_key=2301535fa250c0bcc1f89c74b2a2a9b4')
        .then(response => response.json())
        .then(movies => dispatch(receiveData2(movies)))
        .catch(err => {
          alert('You lose!')

          //NEW_GAME action
          this.props.dispatch(newGame());
        })
      }
    }
