import {combineReducers} from 'redux';
import reducer from './reducer'
import movieData from './api-reducer'

const rootReducer = combineReducers({
  reducer,
  movieData
})

export default rootReducer
