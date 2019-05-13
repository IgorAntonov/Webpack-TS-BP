import { ActionType, getType, createReducer } from 'typesafe-actions'

import { templateActions } from './actions'

export type TemplateState = {
  items: TemplateItem[]
}

export type TemplateAction = ActionType<typeof templateActions>

const initialState: TemplateState = {
  items: [],
}

export const templateReducer = createReducer<TemplateState, TemplateAction>(
  initialState,
)
  .handleAction(getType(templateActions.addItem), (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }))
  .handleAction(getType(templateActions.deleteItem), (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id !== action.payload),
  }))
