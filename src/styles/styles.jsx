import styled from 'styled-components'
import './index.css'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 3.125rem 9.375rem;
  gap: 3.125rem;

  flex-grow: 1;

  @media (max-width: 640px) {
    gap: 2rem;
    padding: 2rem;
    align-items: center;
  }
`
