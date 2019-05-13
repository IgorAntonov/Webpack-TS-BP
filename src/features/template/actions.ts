import { createStandardAction } from 'typesafe-actions'

export enum templateTypes {
  ADD = 'template->ADD',
  DELETE = 'template->DELETE',
}

export const templateActions = {
  addItem: createStandardAction(templateTypes.ADD)<TemplateItem>(),
  deleteItem: createStandardAction(templateTypes.DELETE)<string>(),
}
