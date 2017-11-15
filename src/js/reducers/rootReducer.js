import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import boardsReducer from './boardsReducer'
import listsReducer from './listsReducer'
import cardsReducer from './cardsReducer'

const rootReducer = combineReducers({
  boards:boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  router: routerReducer
})

export default rootReducer
