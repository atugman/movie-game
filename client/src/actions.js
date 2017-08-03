import store from './store'
import $ from 'jquery'

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

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = (data) => ({
  type: 'RECEIVE_USERS',
  data
})

export const RECEIVE_LOGGED_IN_USER_PROFILE = 'RECEIVE_LOGGED_IN_USER_PROFILE';
export const receiveLoggedInUserProfile = (data) => ({
  type: 'RECEIVE_LOGGED_IN_USER_PROFILE',
  data
})

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const receiveLogin = (data) => ({
  type: 'RECEIVE_LOGIN',
  data
})

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: 'LOGOUT',
})

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const updateScore = (user) => ({
  type: 'UPDATE_SCORE',
})

export const SAVE_SCORE_ON_CLICK = 'SAVE_SCORE_ON_CLICK';
export const saveScoreOnClick = (user) => ({
  type: 'SAVE_SCORE_ON_CLICK',
})

export const ERASE_SAVED_SCORE_ON_LOSS = 'ERASE_SAVED_SCORE_ON_LOSS';
export const eraseSavedScoreOnLoss = (user) => ({
  type: 'ERASE_SAVED_SCORE_ON_LOSS',
})

export const LOAD_SAVED_SCORE = 'LOAD_SAVED_SCORE';
export const loadSavedScore = (user) => ({
  type: 'LOAD_SAVED_SCORE',
})

//this may need more params
export const CREATE_USER = 'CREATE_USER';
export const createUser = (user) => ({
  type: 'CREATE_USER',
})

export const fetchData = (inputVal) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('https://api.themoviedb.org/3/search/movie?query=' + inputVal + '&api_key=2301535fa250c0bcc1f89c74b2a2a9b4')
      .then(response => response.json())
      .then(movies => dispatch(receiveData(movies)))
      .catch(err => {
        alert('You lose!')
        dispatch(newGame());
      })
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
        dispatch(newGame());
      })
    }
  }

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => dispatch(receiveUsers(data.users)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
  }

export const fetchLoggedInUserProfile = () => {
  return (dispatch) => {
    dispatch(requestData)
    console.log('hey');
    fetch('http://localhost:8080/api/userProfile')
      .then(response => response.json())
      .then(data => dispatch(receiveLoggedInUserProfile(data)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
  }

//dispatch RECEIVE_LOGIN this from redux form
export const fetchLogin = (username, password) => {
  return (dispatch) => {
    dispatch(requestData)
    console.log('hey');

    const settings = {
     url: 'http://localhost:8080/api/login',
     method: 'GET',
     data: JSON.stringify({username: username, password: password}),
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log('res ', res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           console.log('response ', response),
           dispatch(receiveLogin(response))
       })
      }
     }

//logout action, update state with message from server
  export const fetchLogout = () => {
    return (dispatch) => {
      dispatch(requestData)
      fetch('http://localhost:8080/api/logout')
        .then(response => response.json())
        .then(data => dispatch(logout))
        .catch(err => {
          alert('Error')
          dispatch(newGame());
        })
      }
    }

//no need to update state, the leaderboard will refresh
export const fetchUpdateScore = (user) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('http://localhost:8080/api/users/:score')
      .then(response => response.json())
      .then(data => dispatch(updateScore(user)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
}

//shouldn't need to update state here
//as the saved score box component will
//make a request to the server on page load
//delete saveScoreOnClick action
export const fetchSaveScoreOnClick = (user) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('http://localhost:8080/api/currentScore/:score')
      .then(response => response.json())
      .then(data => dispatch(saveScoreOnClick(user)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
}

//shouldn't need to update state here
//as the saved score box component will
//make a request to the server on page load
//delete eraseSavedScoreOnLoss action
export const fetchEraseCurrentScore = (user) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('http://localhost:8080/api/eraseCurrentScore')
      .then(response => response.json())
      .then(data => dispatch(eraseSavedScoreOnLoss(user)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
}

//need to update state with the score
export const fetchLoadScore = (user) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('http://localhost:8080/api/loadScore')
      .then(response => response.json())
      .then(data => dispatch(loadSavedScore(user)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
}

export const fetchCreateUser = (firstName, lastName, username, password) => {
    console.log(firstName, lastName, username);
  return (dispatch) => {
    dispatch(requestData)
    console.log('hey');

    const settings = {
     url: 'http://localhost:8080/api/users',
     method: 'POST',
     data: JSON.stringify({username: username, password: password}),
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log(res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           console.log('response ', response);
           dispatch(createUser(response))

       })
      }
     }






  //   fetch('http://localhost:8080/api/users', {
  //     method: 'POST',
  //     data: {username, password},
  //     contentType: 'application/json',
  //     dataType: 'json'
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))//dispatch(createUser(data)))
  //     .catch(err => {
  //       alert('Error')
  //       dispatch(newGame());
  //     })
  //   }
  // }
