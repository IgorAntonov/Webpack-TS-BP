import { createReducer } from 'typesafe-actions'

import { templateTypes } from './actions'
import { TemplateItem } from './types'

type TemplateState = {
  items: TemplateItem[]
}

const initialState: TemplateState = {
  items: [],
}

export const templateReducer = createReducer(
  initialState,
  {
    [templateTypes.ADD]: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    [templateTypes.DELETE]: (state, action) => ({
      ...state,
      items: state.items.filter(item => item.id !== action.payload),
    }),
  },
)
