import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { TemplateList } from '@features/template'
import { configureStore } from './store'

type Props = {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #fafafa;
  font-size: 20px;
`

const history = createBrowserHistory()
const store = configureStore(history)

export const App: React.FC<Props> = (): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container>
        <TemplateList />
      </Container>
    </ConnectedRouter>
  </Provider>
)
