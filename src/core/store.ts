import { createStore, applyMiddleware, compose, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

import { createRootReducer } from './rootReducer'
import { RootState } from './RootState'

export const configureStore = (history: History): Store<RootState> => {
  const composeEnchancers =
    (process.env.NODE_ENV === 'development' &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line
    compose

  const middlewares = [routerMiddleware(history)]

  const store = createStore(
    createRootReducer(history),
    composeEnchancers(applyMiddleware(...middlewares)),
  )

  return store
}
