import {
  ACTIVATE_ADD_BOARD,
  SET_BOARD_NAME_VALUE,
  CREATE_BOARD
} from './actionTypes'
import fetch from 'isomorphic-fetch'

export const activateAddBoard = () => {
  return {
    type: ACTIVATE_ADD_BOARD
  }
}

export const setBoardNameValue = (value) => {
  return {
    type: SET_BOARD_NAME_VALUE,
    value
  }
}

export const createBoard = (value) => {
  return {
    type: CREATE_BOARD,
    value
  }
}
