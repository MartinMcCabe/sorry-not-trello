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
    'first_todo_list':{
      name:'To do',
      board: 'welcome'
    },
    'another_list':{
      name:'Some list',
      board: 'welcome'
    }
  },
  cards:{
    'todoItem':{
      name: 'this is a card',
      description: '',
      list: 'first_todo_list'
    },
    'todoItem1':{
      name: 'this is also a card',
      description: '',
      list: 'another_list'
    },
    'todoItem2':{
      name: 'click a card to edit it',
      description: '',
      list: 'first_todo_list'
    },
    'todoItem3':{
      name: 'drag a card to another list',
      description: '',
      list: 'first_todo_list'
    }
  },
  app:{
    add_board_active: false,
    new_board_name: '',
    add_list_active: false,
    new_list_name: '',
    add_card_active: false,
    new_card_name: '',
    current_list_id: ''
  }
}

export const history = createHistory()
const router_middleware = routerMiddleware(history)
const middleWare = [router_middleware]

export const store = createStore( rootReducer, defaultState, applyMiddleware(...middleWare) )
