import { RootState } from '@core/RootState'

export const getTodos = (state: RootState): TemplateItem[] =>
  state.template.items
