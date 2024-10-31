import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  position: fixed;
  bottom: 20px;
  right: 20px;

  flex-wrap: nowrap;

  width: auto;
  height: auto;
  padding: 0.5rem 0.75rem;

  background-color: var(--golden-color);
  color: var(--white-color-00);

  border: 0.0625rem solid var(--golden-color);
  border-radius: 0.25rem;

  transition: all 0.2s;
  cursor: pointer;

  .text {
    font-size: 0.875rem;
  }

  .icon {
    stroke-width: 0.0781rem;
  }

  &:hover {
    background-color: var(--golden-color-opacity);
    border: 0.0625rem solid var(--golden-color);
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    margin-right: 0.5rem;
  }

  .text {
    font-size: 1rem;
    font-weight: bold;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 20rem;

  align-items: center;
  text-align: center;

  padding: 1.25rem;
  color: var(--white-color-00);

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .description {
    font-size: 1rem;
  }

  .qr {
    border: 0.0625rem solid var(--white-color-00);
    padding: 0.625rem;
    border-radius: 0.5rem;
  }

  .copy {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.5rem;

    color: var(--primary-color);

    transition: all 0.2s;
    cursor: pointer;

    .copy-text {
      white-space: nowrap;
      font-size: 1rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
