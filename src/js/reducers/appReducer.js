import {
  ACTIVATE_ADD_BOARD,
  SET_BOARD_NAME_VALUE,
  CREATE_BOARD
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

    default:
      return state
  }
}

export default appReducer
