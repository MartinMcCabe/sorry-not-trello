import {
  CREATE_CARD
  } from '../actions/actionTypes'


  const cardsReducer = (state={}, action) => {

    switch (action.type){
      case CREATE_CARD:
        const newCardName = 'card_ ' + Date.now()
        return Object.assign({}, state, {
          [newCardName]: {
            name: action.card_name,
            list: action.list_id,
            description: ''
          }
        })

      default:
        return state
    }
  }

  export default cardsReducer
