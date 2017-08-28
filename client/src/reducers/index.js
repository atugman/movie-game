import {combineReducers} from 'redux'
import mainReducer from './reducer'
import movieData from './api-reducer'
import { reducer as formReducer } from 'redux-form'
import { reducer } from 'react-redux-sweetalert'

const rootReducer = combineReducers({
  sweetalert: reducer,
  mainReducer,
  movieData,
  form: formReducer
})

export default rootReducer
