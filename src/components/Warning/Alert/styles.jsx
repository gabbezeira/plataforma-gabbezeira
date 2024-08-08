import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    width: 80%;
    height: 3.125rem;

    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--alert-color);

    border: 0.0625rem solid var(--alert-color);
    border-radius: 0.3125rem;
  }

  @media (max-width: 640px) {
    .alert {
      width: 100%;
      height: auto;
      font-size: 0.75rem;
      padding: 0.5rem;
    }
  }

  @media (min-width: 2559px) {
    .alert {
      width: 60%;
    }
  }
`
