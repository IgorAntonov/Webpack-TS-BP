import { StateType } from 'typesafe-actions'
import { createRootReducer } from '../core/rootReducer'

export type RootState = StateType<ReturnType<typeof createRootReducer>>
