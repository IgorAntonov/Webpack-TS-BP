import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 70%;
  padding: 8px;
  border-bottom: 1px solid #333;

  cursor: pointer;
  text-align: center;
`

type Props = {
  onClick: () => void
}

export const TodoItem: React.FC<Props> = ({ onClick, children }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
)