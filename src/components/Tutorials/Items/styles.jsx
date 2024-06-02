import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: auto;

  gap: 2.5rem;

  .thumb {
    width: 22.25rem;
    height: 12.5rem;
    border-radius: 0.9375rem;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .side-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 47.5rem;
    height: 12.5rem;

    padding: 2rem;

    background-color: var(--black-color-00);
    border: 0.0313rem solid var(--stroke-color);
    border-radius: 0.625rem;

    .card-top {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      .title {
        font-size: 1rem;
        font-weight: 500;
        color: var(--white-color-01);
      }

      .description {
        font-size: 0.875rem;
        font-weight: 300;
        color: var(--white-color-01);
      }
    }

    .card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      .video-upload {
        font-size: 1rem;
        color: var(--white-color-00);
        font-weight: 300;

        strong {
          color: var(--white-color-00);
          font-weight: 500;
        }
      }

      .card-buttons {
        display: flex;
        gap: 1rem;

        .watch-button {
          display: flex;
          align-items: center;

          width: auto;
          height: 2.5rem;

          padding: 0rem 0.9375rem;

          background-color: var(--primary-color-opacity);
          border: 0.0625rem solid var(--primary-color);
          border-radius: 0.3125rem;

          text-decoration: none;

          color: var(--white-color-00);
          font-size: 0.875rem;

          transition: all 0.2s;
          cursor: pointer;

          &:hover {
            transform: scale(1.02);
          }
        }

        .files-button {
          display: flex;
          align-items: center;

          width: auto;
          height: 2.5rem;

          padding: 0rem 0.9375rem;

          background-color: var(--primary-color);
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
            width: 1.25rem;
            height: auto;
            margin-left: 0.625rem;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;

    .thumb {
      width: auto;
      border-radius: 0.625rem;
    }

    .side-card {
      width: 100%;
      gap: 0.875rem;
      padding: 1.25rem;
      height: auto;

      .card-top {
        .title {
          font-size: 0.875rem;
        }

        .description {
          font-size: 0.75rem;
        }
      }

      .card-bottom {
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .video-upload {
          font-size: 0.75rem;
        }

        .card-buttons {
          width: 100%;
          gap: 0.75rem;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;

          .watch-button {
            width: 100%;
            font-size: 0.75rem;
            align-items: center;
            justify-content: center;
          }

          .files-button {
            width: 100%;
            font-size: 0.75rem;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`
