import {
  ACTIVATE_ADD_BOARD,
  ACTIVATE_ADD_CARD,
  ACTIVATE_ADD_LIST,
  SET_BOARD_NAME_VALUE,
  SET_LIST_NAME_VALUE,
  SET_CARD_NAME_VALUE,
  CREATE_BOARD,
  CREATE_LIST,
  CREATE_CARD,
  MOVE_CARD,
  EDIT_CARD,
  SAVE_CARD,
  DELETE_CARD
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

export const activateAddList = () => {
  return {
    type: ACTIVATE_ADD_LIST
  }
}

export const activateAddCard = (list_id) => {
  return {
    type: ACTIVATE_ADD_CARD,
    list_id
  }
}

export const setListNameValue = (value) => {
  return {
    type: SET_LIST_NAME_VALUE,
    value
  }
}

export const createList = (list_name, board_id) => {
  return {
    type: CREATE_LIST,
    list_name,
    board_id
  }
}

export const setCardNameValue = (value) => {
  return {
    type: SET_CARD_NAME_VALUE,
    value
  }
}

export const createCard = (card_name, list_id) => {
  return {
    type: CREATE_CARD,
    card_name,
    list_id
  }
}

export const moveCard = (card_id, list_id, pos) => {
  return {
    type: MOVE_CARD,
    card_id,
    list_id,
    pos
  }
}

export const editCard = (card_id) => {
  return {
    type: EDIT_CARD,
    card_id
  }
}

export const saveCard = (card_id, name, description) => {
  return {
    type: SAVE_CARD,
    card_id,
    name,
    description
  }
}

export const deleteCard = (card_id) => {
  return {
    type: DELETE_CARD,
    card_id
  }
}
