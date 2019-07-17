declare module 'RootState' {
  import { StateType } from 'typesafe-actions'

  export type RootState = StateType<
    ReturnType<typeof import('../core/rootReducer').createRootReducer>
  >
}
