import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;

  .title {
    font-size: 1rem;
    color: var(--white-color-00);
  }

  .image {
    width: 8.25rem;
    height: auto;
    user-select: none;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    user-select: none;

    gap: 18px;
    width: 100%;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;

      gap: 0.5rem;
      padding: 0rem 1rem;

      text-transform: capitalize;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--white-color-00);

      width: 50%;
      height: 3.5rem;

      background-color: var(--stroke-color);
      border: 0.0625rem solid var(--stroke-color);
      border-radius: 0.3125rem;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }
    }

    .colored {
      color: var(--white-color-00);
      background-color: var(--primary-color);
      border: 0.0625rem solid var(--primary-color);

      &:hover {
        transform: scale(1.04);
      }
    }
  }

  @media (max-width: 640px) {
    width: 17.5rem;
  }
`
