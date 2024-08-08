import styled from 'styled-components'
import '../../styles/index.css'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background: var(--black-color-00);
    width: auto;
    height: auto;

    position: relative;
    padding: 2.5rem;

    border: 0.0625rem solid var(--stroke-color);
    border-radius: 0.625rem;
  }

  .close-button {
    position: absolute;
    color: var(--solid-stroke-color);
    user-select: none;

    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`
