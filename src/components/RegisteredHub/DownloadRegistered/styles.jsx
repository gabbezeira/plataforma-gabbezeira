import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;

  min-height: auto;
  width: 50rem;

  .download-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    gap: 2rem;

    .search {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0rem 1rem;
      gap: 1rem;

      width: 100%;
      height: 3.5rem;

      background-color: var(--black-color-00);
      border: 0.0313rem solid var(--stroke-color);
      border-radius: 0.75rem;

      transition: all 0.2s;
      outline: none;

      &:hover {
        border: 0.0625rem solid var(--primary-color);
      }

      .icon {
        color: var(--white-color-00);
        user-select: none;
      }

      .search-input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        border-radius: 0.625rem;

        font-size: 1.125rem;
        color: var(--white-color-00);
        outline: none;

        &::placeholder {
          color: var(--white-color-00);
          opacity: 0.3;
          font-size: 1rem;
          font-weight: 300;
        }

        &::-webkit-search-cancel-button {
          display: none;
        }
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      user-select: none;

      gap: 1.25rem;

      width: 100%;
      height: 100%;
    }
  }

  .confirm-modal {
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
  }

  @media (max-width: 640px) {
    width: 17.5rem;

    .confirm-modal {
      width: 17.5rem;
    }
  }

  @media (min-width: 2559px) {
    .download-area {
      width: 60%;
    }
  }
`
