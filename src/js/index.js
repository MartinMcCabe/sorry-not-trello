import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, Router } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'
import PageTemplate from './containers/pageTemplate'
import Boards from './containers/boards'
import NotFound from './containers/notFound'

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <PageTemplate>
        <Switch>
          <Route exact path='/' component={ Boards } />
          <Route component={ NotFound } />
        </Switch>
      </PageTemplate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('swapi-app')
)
