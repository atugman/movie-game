import {combineReducers} from 'redux';
import reducer from './reducer'
import movieData from './api-reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  reducer,
  movieData,
  form: formReducer
})

export default rootReducer
