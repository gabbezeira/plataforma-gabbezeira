import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: auto;

  padding: 2rem;
  gap: 1.25rem;

  background-color: var(--black-color-00);
  border: 0.0313rem solid var(--stroke-color);
  border-radius: 0.9375rem;

  .social-media {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 4.375rem;

    padding: 1.25rem;
    gap: 1.25rem;

    text-decoration: none;

    background-color: var(--black-color-01);
    border: 0.0625rem solid var(--black-color-01);
    border-radius: 0.625rem;

    transition: all 0.2s;

    &:hover {
      background-color: var(--primary-color-opacity);
      border: 0.0625rem solid var(--primary-color);
    }
    .image {
      width: auto;
      height: 1.875rem;
    }

    .text {
      color: var(--white-color-01);
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    .social-media {
      gap: 0.625rem;
      width: 100%;
      padding: 0.875rem;

      .text {
        font-size: 0.875rem;
      }
    }
  }
`
