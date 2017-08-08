import store from './store'
import $ from 'jquery'
const apiURL = 'http://obscure-peak-69363.herokuapp.com'
//const apiURL = apiURL + ''

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
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

// export const RECEIVE_LOGGED_IN_USER_PROFILE = 'RECEIVE_LOGGED_IN_USER_PROFILE';
// export const receiveLoggedInUserProfile = (data) => ({
//   type: 'RECEIVE_LOGGED_IN_USER_PROFILE',
//   data
// })

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
export const loadSavedScore = (score) => ({
  type: 'LOAD_SAVED_SCORE',
})

//this may need more params
export const CREATE_USER = 'CREATE_USER';
export const createUser = (user) => ({
  type: 'CREATE_USER',
})

export const fetchNewGame = (score) => {
  return (dispatch) => {
    dispatch(requestData)

      const settings = {//1
       url: apiURL + '/api/eraseCurrentScore/',
       method: 'PATCH',
       data: score,
       contentType: 'application/json',
       dataType: 'json',
       error: (res) => {
           console.log('res ', res)
         }
      }

      $.ajax(settings)
         .done((response) => {//2
                     const settings = {
                      url: apiURL + '/api/checkScore/',
                      method: 'GET',
                      data: score,
                      contentType: 'application/json',
                      dataType: 'json',
                      error: (res) => {
                          console.log('res ', res)
                        }
                     }

                     $.ajax(settings)
                            .done((response) => {
                              var currentHighScore = response.user.score;
                              if (currentHighScore < score) {
                                console.log('SCORE ', response);
                              $.ajax({
                              url: apiURL + '/api/users/' + score,
                              type: "PATCH",
                              data: score,
                              success: function(response) {
                                //dispatch(newGame());
                              }
                              })
                              }
                            })
         })
      }
  }

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
    fetch(apiURL + '/api/users')
      .then(response => response.json())
      .then(data => dispatch(receiveUsers(data.users)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
  }

// export const fetchLoggedInUserProfile = () => {
//   return (dispatch) => {
//     dispatch(requestData)
//     console.log('hey');
//     fetch(apiURL + '/api/userProfile')
//       .then(response => response.json())
//       .then(data => dispatch(receiveLoggedInUserProfile(data)))
//       .catch(err => {
//         alert('Error')
//         dispatch(newGame());
//       })
//     }
//   }

//dispatch RECEIVE_LOGIN this from redux form
export const fetchLogin = (username, password) => {
  return (dispatch) => {
    dispatch(requestData)
    console.log('hey');

    const settings = {
     url: apiURL + '/api/login',
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
      const settings = {
       url: apiURL + '/api/logout/',
       method: 'GET',
       contentType: 'application/json',
       error: (res) => {
           console.log('res ', res)
         }
      }

      $.ajax(settings)
         .done((response) => {
             console.log('response ', response)
            //  ,dispatch(newGame(response))
         })
        }
      }


//no need to update state, the leaderboard will refresh
// export const fetchUpdateScore = (score) => {
//   return (dispatch) => {
//     dispatch(requestData)
//
//     const settings = {
//      url: apiURL + '/api/users/' + score,
//      method: 'PATCH',
//      data: score,
//      contentType: 'application/json',
//      dataType: 'json',
//      error: (res) => {
//          console.log('res ', res)
//        }
//     }
//
//     $.ajax(settings)
//        .done((response) => {
//            console.log('response ', response),
//            dispatch(newGame(response))
//        })
//     }
// }

//shouldn't need to update state here
//as the saved score box component will
//make a request to the server on page load
//delete saveScoreOnClick action
export const fetchSaveScoreOnClick = (score) => {
  return (dispatch) => {
    dispatch(requestData)

    const settings = {
     url: apiURL + '/api/currentScore/' + score,
     method: 'PATCH',
     data: score,
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log('res ', res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           console.log('response ', response),
           dispatch(saveScoreOnClick(score))
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
    fetch(apiURL + '/api/eraseCurrentScore')
      .then(response => response.json())
      .then(data => dispatch(eraseSavedScoreOnLoss(user)))
      .catch(err => {
        alert('Error')
        dispatch(newGame());
      })
    }
}

//need to update state with the score
export const fetchLoadScore = (score) => {
  return (dispatch) => {
    dispatch(requestData)

    const settings = {
     url: apiURL + '/api/loadScore',
     method: 'GET',
     data: score,
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log('res ', res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           console.log('response ', response),
           dispatch(loadSavedScore(score))
           event.preventDefault()
       })
      }
    }


export const fetchCreateUser = (firstName, lastName, username, password) => {
    console.log(firstName, lastName, username);
  return (dispatch) => {
    dispatch(requestData)
    console.log('hey');

    const settings = {
     url: apiURL + '/api/users',
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






  //   fetch(apiURL + '/api/users', {
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
