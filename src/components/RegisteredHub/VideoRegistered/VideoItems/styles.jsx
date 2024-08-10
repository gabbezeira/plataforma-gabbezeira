import styled from 'styled-components'
import '../../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: auto;

  padding: 2rem;
  gap: 2.5rem;

  background-color: var(--black-color-00);
  border: 0.0313rem solid var(--stroke-color);
  border-radius: 0.875rem;

  .left-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.9375rem;
    overflow: scroll;

    .thumb {
      width: 5rem;
      height: 3.125rem;
      user-select: none;

      border-radius: 0.375rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .title {
      overflow: hidden;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 500;
      color: var(--white-color-01);
    }
  }

  .right-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    .button {
      display: flex;
      align-items: center;
      user-select: none;

      width: auto;
      height: 2.5rem;

      padding: 0rem 0.875rem;

      background-color: var(--primary-color);
      border: none;
      border-radius: 0.3125rem;

      text-decoration: none;

      color: var(--white-color-00);
      font-size: 0.875rem;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.02);
      }

      .icon {
        width: 1rem;
        height: auto;
        user-select: none;
      }
    }

    .outline {
      color: var(--white-color-00);
      background-color: var(--primary-color-opacity);
      border: 0.0625rem solid var(--primary-color);

      &:hover {
        transform: scale(1.04);
      }
    }
  }

  @media (max-width: 640px) {
    padding: 1rem;
    gap: 0.875rem;

    .left-content {
      width: 100%;
      height: auto;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 0.75rem;

      .thumb {
        width: 5rem;
        background-size: contain;
        user-select: none;
      }

      .title {
        overflow: scroll;
        font-size: 0.875rem;
      }
    }

    .right-content {
      justify-content: center;

      .button {
        justify-content: center;
        align-items: center;
        padding: 0.375rem;
        user-select: none;

        height: auto;

        .icon {
          width: 1rem;
          height: auto;
          user-select: none;
        }
      }

      .outline {
        color: var(--white-color-00);
        background-color: var(--primary-color-opacity);
        border: 0.0625rem solid var(--primary-color);

        &:hover {
          transform: scale(1.04);
        }
      }
    }
  }
`
