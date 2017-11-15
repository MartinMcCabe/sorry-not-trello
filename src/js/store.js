import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/rootReducer'

const defaultState = {
  boards:{
    'welcome': {
      name: 'Welcome board',
      add_list_active:false
    }
  },
  lists:{
    'first_todo_list':{
      name:'To do',
      board: 'welcome',
      add_card_active:false
    },
    'another_list':{
      name:'Some list',
      board: 'welcome',
      add_card_active:false
    }
  },
  cards:{
    'todoItem':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    },
    'todoItem1':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    },
    'todoItem2':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    },
    'todoItem3':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    },
    'todoItem4':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    },
    'todoItem5':{
      description: 'Add more tasks',
      list: 'first_todo_list'
    }
  },
  app:{
    add_board_active: false,
    new_board_name: ''
  }
}

export const history = createHistory()
const router_middleware = routerMiddleware(history)
const middleWare = [router_middleware]

export const store = createStore( rootReducer, defaultState, applyMiddleware(...middleWare) )
