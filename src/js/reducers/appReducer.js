import {
  ACTIVATE_ADD_BOARD,
  ACTIVATE_ADD_LIST,
  ACTIVATE_ADD_CARD,
  SET_BOARD_NAME_VALUE,
  SET_LIST_NAME_VALUE,
  SET_CARD_NAME_VALUE,
  CREATE_BOARD,
  CREATE_LIST,
  CREATE_CARD
} from '../actions/actionTypes'


const appReducer = (state={}, action) => {

  switch (action.type){
    case ACTIVATE_ADD_BOARD:
      return Object.assign({}, state, {
        add_board_active: true
      })

    case SET_BOARD_NAME_VALUE:
    return Object.assign({}, state, {
      new_board_name: action.value
    })

    case CREATE_BOARD:
    return Object.assign({}, state, {
      new_board_name: '',
      add_board_active: false
    })

    case ACTIVATE_ADD_LIST:
      return Object.assign({}, state, {
        add_list_active: true
      })

    case SET_LIST_NAME_VALUE:
      return Object.assign({}, state, {
        new_list_name: action.value
      })

    case CREATE_LIST:
      return Object.assign({}, state, {
        new_list_name: '',
        add_list_active: false
      })

    case ACTIVATE_ADD_CARD:
      return Object.assign({}, state, {
        add_card_active: true,
        current_list_id: action.list_id
      })

    case SET_CARD_NAME_VALUE:
      return Object.assign({}, state, {
        new_card_name: action.value
      })

    case CREATE_CARD:
      return Object.assign({}, state, {
        new_card_name: '',
        add_card_active: false
      })

    default:
      return state
  }
}

export default appReducer
