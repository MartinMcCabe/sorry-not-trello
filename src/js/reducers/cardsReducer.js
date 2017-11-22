import {
  CREATE_CARD,
  MOVE_CARD
  } from '../actions/actionTypes'


  const cardsReducer = (state={}, action) => {

    switch (action.type){
      case CREATE_CARD:
        const newCardName = 'card_ ' + Date.now()
        return Object.assign({}, state, {
          [newCardName]: {
            name: action.card_name,
            list: action.list_id,
            description: '',
            pos: getCardPos(state, action)
          }
        })

      case MOVE_CARD:
        let newcards = {}
        Object.keys(state)
          .filter(key => state[key].list == action.list_id)
          .map( key => {
            newcards[key] = Object.assign({}, state[key], {
              pos: state[key].pos < action.pos ? state[key].pos : state[key].pos+1
            })
          })

        const newstate = Object.assign (
          {},
          state,
          newcards,
          {
            [action.card_id]: Object.assign({}, state[action.card_id], {
              list: action.list_id,
              pos: action.pos
            })
          })
          return newstate

      default:
        return state
    }
  }

  const getCardPos = (cards, action) => {
    return Object.keys(cards).filter( (key) => cards[key].list == action.list_id ).length
  }

  export default cardsReducer
