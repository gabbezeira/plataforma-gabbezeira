import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  width: auto;
  height: auto;

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: var(--white-color-01);
    text-transform: capitalize;
  }

  .subtitle {
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--white-color-01);
  }

  @media (max-width: 640px) {
    text-align: center;

    .title {
      font-size: 1.75rem;
    }

    .subtitle {
      font-size: 1rem;
      font-weight: 300;
      color: var(--white-color-01);
    }
  }
`
