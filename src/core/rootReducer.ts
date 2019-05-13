import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { templateReducer } from '@features/template'

export const createRootReducer = (history: History) => // eslint-disable-line
  combineReducers({
    router: connectRouter(history),
    template: templateReducer,
  })
