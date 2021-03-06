import {
  CREATE_BOARD,
  ACTIVATE_ADD_LIST
} from '../actions/actionTypes'


const boardsReducer = (state={}, action) => {

  switch (action.type){

    case CREATE_BOARD:
      const newBoardId = 'board_' + Date.now()
      return Object.assign({}, state, {
        [newBoardId]:{
          name: action.value
        }
      })

    default:
      return state
  }
}

export default boardsReducer
