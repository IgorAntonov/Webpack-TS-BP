import { connect } from 'react-redux'

import { RootState } from '@core/RootState'
import { TemplateList } from './TemplateList'
import { templateActions } from '../../actions'
import { getTodos } from '../../selectors'

export type StateProps = {
  todos: ReturnType<typeof getTodos>
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: getTodos(state),
})

const mapDispatchToProps = {
  addTodo: templateActions.addItem,
  removeTodo: templateActions.deleteItem,
}

export type DispatchProps = typeof mapDispatchToProps

export const TemplateListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateList)
