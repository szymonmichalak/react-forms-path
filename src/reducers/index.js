import { combineReducers } from 'redux'
import form from './form'

// Combine all the Redux reducer that should be available
const rootReducer = combineReducers({
  form
})

export default rootReducer
