import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;

  .search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0rem 1rem;
    gap: 1rem;

    width: 80%;
    height: 3.5rem;

    background-color: var(--black-color-00);
    border: 0.0625rem solid var(--stroke-color);
    border-radius: 0.625rem;

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

      font-size: 1rem;
      color: var(--white-color-00);
      outline: none;

      &::placeholder {
        font-size: 1rem;
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

    width: 80%;
    height: 100%;
  }

  @media (max-width: 640px) {
    .search {
      width: 100%;
    }

    .item {
      width: 100%;
    }
  }
`
