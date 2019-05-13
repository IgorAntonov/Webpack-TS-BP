import React, { useState } from 'react'

import { TextInput } from '../../atoms'

type Props = {
  addTodo: (item: TemplateItem) => void
}

export const AddInput: React.FC<Props> = ({ addTodo }) => {
  const [value, changeValue] = useState('')

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.which === 13) {
      addTodo({ value, id: String(Date.now()) })
      changeValue('')
    }
  }
  return (
    <TextInput
      value={value}
      onChange={e => changeValue(e.target.value)}
      onKeyDown={handleSubmit}
    />
  )
}
