import { SET_SEX } from '../constants'
import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
  counter,
  sex
})


function sex(state = 0, action) {
  switch (action.type) {
    case SET_SEX:
      return action.sex
    default:
      return state
  }
}
