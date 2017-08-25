import $ from 'jquery'
const apiURL = 'http://still-ocean-47498.herokuapp.com'
//const apiURL = 'http://localhost:8080'

export const NEW_GAME = 'NEW_GAME';
export const newGame = (users) => ({
  type: NEW_GAME,
  users
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

export const RECEIVE_MULTI_WORD_MOVIE_DATA = 'RECEIVE_MULTI_WORD_MOVIE_DATA';
export const receiveMultiWordMovieData = (inputVal, data) => ({
  type: 'RECEIVE_MULTI_WORD_MOVIE_DATA',
  inputVal,
  data
})

export const RECEIVE_SINGLE_WORD_MOVIE_DATA = 'RECEIVE_SINGLE_WORD_MOVIE_DATA';
export const receiveSingleWordMovieData = (inputVal, data) => ({
  type: 'RECEIVE_SINGLE_WORD_MOVIE_DATA',
  inputVal,
  data
})

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = (data) => ({
  type: 'RECEIVE_USERS',
  data
})

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const receiveLogin = (data) => ({
  type: 'RECEIVE_LOGIN',
  data
})

export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const receiveLogout = () => ({
  type: 'RECEIVE_LOGOUT'
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
export const saveScoreOnClick = (score) => ({
  type: 'SAVE_SCORE_ON_CLICK',
  score
})

export const ERASE_SAVED_SCORE_ON_LOSS = 'ERASE_SAVED_SCORE_ON_LOSS';
export const eraseSavedScoreOnLoss = (user) => ({
  type: 'ERASE_SAVED_SCORE_ON_LOSS',
})

export const LOAD_SAVED_SCORE = 'LOAD_SAVED_SCORE';
export const loadSavedScore = (score) => ({
  type: 'LOAD_SAVED_SCORE',
})

export const CREATE_USER = 'CREATE_USER';
export const createUser = (user) => ({
  type: 'CREATE_USER',
})

export const RECEIVE_AUTHENTICATED_USER = 'RECEIVE_AUTHENTICATED_USER';
export const receiveAuthenticatedUser = (user) => ({
  type: 'RECEIVE_AUTHENTICATED_USER',
  user
})

export const fetchNewGame = (score) => {
  return (dispatch) => {
    dispatch(requestData)

      const settings = {
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
      .done((response) => {
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
            $.ajax({
            url: apiURL + '/api/users/' + score,
            type: "PATCH",
            data: score,
            success: function(response) {
              const settings = {
                url: apiURL + '/api/users/',
                method: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                error: (res) => {

                }
              }

                $.ajax(settings)
                       .done((response) => {
                         dispatch(newGame(response))
                       })
                     }
                  })
                } else {
                  dispatch(newGame(response))
                }
              })
            })
          }
        }

export const fetchMultiWordMovieData = (inputVal, score) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('https://api.themoviedb.org/3/search/movie?query=' + inputVal + '&api_key=2301535fa250c0bcc1f89c74b2a2a9b4')
      .then(response => response.json())
      .then(movies => dispatch(receiveMultiWordMovieData(inputVal, movies)))
      .catch(err => {
        alert('You lose!')
        dispatch(fetchNewGame(score));
      })
    }
  }


export const fetchSingleWordMovieData = (inputVal, score) => {
  return (dispatch) => {
    dispatch(requestData)
    fetch('https://api.themoviedb.org/3/search/movie?query=' + inputVal + '&api_key=2301535fa250c0bcc1f89c74b2a2a9b4')
      .then(response => response.json())
      .then(movies => dispatch(receiveSingleWordMovieData(inputVal, movies)))
      .catch(err => {
        alert('You lose!')
        dispatch(fetchNewGame(score));
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

export const fetchLogin = (username, password) => {
  return (dispatch) => {
    dispatch(requestData)

    const settings = {
     url: apiURL + '/api/login',
     method: 'GET',
     headers: {
       'content-type': "application/json",
       authorization: "Basic " + btoa(username + ':' + password)
     },
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log('error ', res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           console.log('205')
           dispatch(receiveLogin(response))
       })
      }
     }

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
       console.log('logout');
       if(response.loggedOut) {
         dispatch(receiveLogout())
       }
     })
    }
  }

export const fetchSaveScoreOnClick = (score, username) => {
  return (dispatch) => {
    dispatch(requestData)

    let data = {
      score: score,
      username: username
    }

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
         console.log(response);
           dispatch(saveScoreOnClick(response.currentScore))
       })
      }
    }

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
           dispatch(loadSavedScore(score))
           event.preventDefault()
       })
      }
    }


export const fetchCreateUser = (firstName, lastName, username, password, confirmPassword) => {
  return (dispatch) => {
    dispatch(requestData)

    const settings = {
     url: apiURL + '/api/users',
     method: 'POST',
     data: JSON.stringify({username: username, password: password, confirmPassword: confirmPassword}),
     contentType: 'application/json',
     dataType: 'json',
     error: (res) => {
         console.log(res)
       }
    }

    $.ajax(settings)
       .done((response) => {
           dispatch(createUser(response))
           if (!(response.hasOwnProperty("message"))) {
            alert("User created! Please log in.")
            event.target.username.value = '';
            event.target.password.value = '';
            event.target.firstName.value = '';
            event.target.lastName.value = '';
            event.target.confirmPassword.value = '';
          } else {
            var html = response.message
            alert("Oops..." + html);
          }
       })
      }
     }

 export const fetchUserProfile = () => {
   return (dispatch) => {
     dispatch(requestData)

     const settings = {
      url: apiURL + '/api/userProfile',
      method: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      error: (res) => {
          alert('Please log in.')
        }
     }

     $.ajax(settings)
        .done((response) => {
          dispatch(receiveAuthenticatedUser(response.user))
        })
       }
     }
