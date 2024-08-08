import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  width: 100%;

  .title {
    color: var(--white-color-00);
    font-size: 1.75rem;
    font-weight: 500;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 52rem;
    height: auto;

    gap: 2.5rem;
    padding: 0rem;

    .form-inputs {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      width: 100%;

      gap: 1.25rem;

      .duo-section {
        display: flex;
        flex-direction: row;
        gap: 30px;

        width: 100%;
      }

      .input-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;

        .label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--white-color-00);
        }

        .input-box {
          height: auto;
          padding: 1rem 0.875rem;

          background-color: var(--black-color-01);
          color: var(--white-color-01);

          border: 0.0625rem solid var(--stroke-color);
          border-radius: 0.25rem;
          outline: none;

          transition: all 0.2s;

          &:focus {
            border: 0.0625rem solid var(--primary-color);
          }

          &::placeholder {
            font-size: 0.875rem;
            color: var(--white-color-01);
            opacity: 0.8;
          }
        }

        .text-area-box {
          height: 8.125rem;
          padding: 1rem 0.875rem;

          background-color: var(--black-color-01);
          color: var(--white-color-01);

          border: 0.0625rem solid var(--stroke-color);
          border-radius: 0.25rem;
          outline: none;

          transition: all 0.2s;

          resize: none;

          &:focus {
            border: 0.0625rem solid var(--primary-color);
          }

          &::placeholder {
            font-size: 0.875rem;
            color: var(--white-color-01);
            opacity: 0.8;
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-direction: row;

      gap: 18px;
      width: 100%;

      .button {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.5rem;
        padding: 0rem 1rem;

        text-transform: capitalize;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        color: var(--white-color-00);

        width: 40%;
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
    width: 280px;

    .form {
      width: 100%;

      .form-inputs {
        .duo-section {
          flex-direction: column;
        }
      }

      .buttons {
        .button {
          width: 50%;
        }
      }
    }
  }
`
