import { StateType } from 'typesafe-actions'
import { createRootReducer } from './rootReducer'

export type RootState = StateType<ReturnType<typeof createRootReducer>>