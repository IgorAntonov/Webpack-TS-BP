import { createStandardAction, ActionType } from 'typesafe-actions'

import { TemplateItem } from './types'

export enum templateTypes {
  ADD = 'template->ADD',
  DELETE = 'template->DELETE',
}

export const templateActions = {
  addItem: createStandardAction(templateTypes.ADD)<TemplateItem>(),
  deleteItem: createStandardAction(templateTypes.DELETE)<string>(),
}

export type TemplateAction = ActionType<typeof templateActions>