import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/rootReducer'

const defaultState = {
  boards:{
    'welcome': {
      name: 'Welcome board'
    }
  },
  lists:{
    'first_todo':{
      name:'To do',
      board: 'welcome'
    }
  },
  cards:{
    'todoItem':{
      description: 'Add more tasks',
      list: 'first_todo'
    }
  }
}

export const history = createHistory()
const router_middleware = routerMiddleware(history)
const middleWare = [router_middleware]

export const store = createStore( rootReducer, defaultState, applyMiddleware(...middleWare) )
