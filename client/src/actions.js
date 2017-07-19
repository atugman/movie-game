import store from './store'

export const NEW_GAME = 'NEW_GAME';
export const newGame = (inputVal) => ({
  type: NEW_GAME,
  inputVal
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const CHANGE_FIRST_LETTER = 'CHANGE_FIRST_LETTER';
export const changeFirstLetter = () => ({
    type: CHANGE_FIRST_LETTER
});

// export const INPUT = 'INPUT';
// export const input = (word) => ({
//     type: INPUT,
//     payload: word
// });

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
