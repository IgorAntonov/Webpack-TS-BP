import React from 'react'
import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  background: #fafafa;
  font-size: 20px;
`

export const App: React.FC<Props> = (): JSX.Element => (
  <Container>Hello world</Container>
)
