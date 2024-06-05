import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  .download-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 80%;
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

      gap: 1.25rem;

      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 640px) {
    .download-area {
      width: 100%;
    }
  }

  @media (min-width: 2559px) {
    .download-area {
      width: 60%;
    }
  }
`
