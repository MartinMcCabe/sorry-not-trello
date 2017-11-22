import {
  CREATE_LIST
} from '../actions/actionTypes'


const listsReducer = (state={}, action) => {

  switch (action.type){
    case CREATE_LIST:
      const newListName = 'list_ ' + Date.now()
      return Object.assign({}, state, {
        [newListName]: {
          name: action.list_name,
          board: action.board_id
        }
      })

    default:
      return state
  }
}

export default listsReducer
