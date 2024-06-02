import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;

  width: 100%;
  height: 5rem;

  position: fixed;
  z-index: 100;
  top: 0;

  background-color: var(--black-color-00);
  border: 0.0313rem solid var(--stroke-color);

  .menu-logo {
    width: auto;
    height: 1.25rem;
  }

  .menu-items {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1.25rem;

    .button {
      display: flex;
      align-items: center;
      padding: 0rem 1rem;

      text-transform: capitalize;
      text-decoration: none;
      font-size: 0.875rem;
      color: var(--white-color-00);

      width: auto;
      height: 2.5rem;

      background-color: var(--black-color-00);
      border: 0.0625rem solid var(--stroke-color);
      border-radius: 0.3125rem;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-color-opacity);
        border: 0.0625rem solid var(--primary-color);
      }
    }

    .colored {
      background-color: var(--primary-color);
      border: none;

      &:hover {
        background-color: var(--primary-color);
        transform: scale(1.04);
        border: none;
      }
    }

    .login {
      padding: 0rem 0.5rem;
      background-color: var(--primary-color-opacity);
      border: 0.0625rem solid var(--primary-color);

      &:hover {
        background-color: var(--primary-color);
        transform: scale(1.04);
        border: 0.0625rem solid var(--primary-color);
      }

      .icon {
        width: 1.25rem;
        height: 1.25rem;
        color: var(--white-color-00);
      }
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: auto;
    gap: 1.25rem;

    padding: 1.25rem 1.25rem;

    .menu-items {
      max-width: 100%;
      width: 100%;
      justify-content: space-between;
      overflow: hidden;
      gap: 0rem;

      .button {
        width: auto;
        font-size: 0.75rem;
      }

      .colored {
        display: none;
      }
    }
  }
`
