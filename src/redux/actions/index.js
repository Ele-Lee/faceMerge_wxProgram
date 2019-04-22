import {
  ADD,
  MINUS,
  SET_SEX
} from '../constants'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
export const setSex = (sex) => {
  return {
    type: SET_SEX,
    sex
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
