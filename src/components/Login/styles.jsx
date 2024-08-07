import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 31.25rem;
    height: auto;

    gap: 1.875rem;
    padding: 2rem 2.5rem;

    background-color: var(--black-color-00);
    border: 0.0313rem solid var(--stroke-color);
    border-radius: 0.625rem;

    .form-inputs {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      width: 100%;

      gap: 1.25rem;

      .input-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;

        .label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--white-color-01);
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
      }
    }

    .form-button {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 3.5rem;

      background-color: var(--primary-color-opacity);

      border: 1px solid var(--primary-color);
      border-radius: 0.25rem;

      color: var(--white-color-00);
      font-size: 1rem;
      font-weight: 500;

      transition: all 0.4s;
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }

      .spinner {
        animation: spin 1s linear infinite;

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`
