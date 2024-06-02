import styled from 'styled-components'
import './index.css'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 3.125rem 9.375rem;
  gap: 3.125rem;

  @media (max-width: 640px) {
    gap: 2rem;
    padding: 2rem;
    align-items: center;
  }
`
