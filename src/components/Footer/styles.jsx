import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 5rem;

  width: 100%;
  height: 5rem;

  background-color: var(--black-color-00);
  border: 0.0313rem solid var(--stroke-color);

  .copy-text {
    font-size: 1rem;
    font-weight: 400;
    color: var(--white-color-00);

    strong {
      font-weight: 500;
      color: var(--primary-color);
    }
  }

  @media (max-width: 640px) {
    text-align: center;

    .copy-text {
      font-size: 0.75rem;
    }
  }
`
