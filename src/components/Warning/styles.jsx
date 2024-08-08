import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .warning {
    width: 60%;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--white-color-01);
    user-select: none;
  }

  @media (max-width: 640px) {
    .warning {
      width: 100%;
      font-size: 0.75rem;
    }
  }
`
