import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  .alert {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 0rem;
    width: 70%;
    height: 3.125rem;

    border: 0.0625rem solid var(--beta-alert);
    border-radius: 0.3125rem;

    .text {
      text-align: center;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--beta-alert);

      .text-link {
        color: var(--beta-alert-link);
        font-weight: 600;
        text-decoration: none;
        margin-left: 0.25rem;
        transition: all 0.2s;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 640px) {
    .alert {
      width: 100%;
      height: auto;
      font-size: 0.75rem;
      padding: 0.5rem;
    }
  }
`
