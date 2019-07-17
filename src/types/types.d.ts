import { RootAction } from './RootAction'
import { RootState } from './RootState'

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction
    RootState: RootState
  }
}
