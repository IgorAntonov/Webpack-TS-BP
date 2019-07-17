import { RootState } from 'RootState'
import { TemplateItem } from './types'

export const getTodos = (state: RootState): TemplateItem[] =>
  state.template.items
