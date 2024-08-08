import styled, { keyframes } from 'styled-components'
import '../../styles/index.css'

const fadeIn = keyframes`
  from { right: -18.75rem; opacity: 0; }
  to { right: 1.875rem; opacity: 1; }
`

const fadeInTop = keyframes`
  from { bottom: -18.75rem; opacity: 0; }
  to { bottom: 1.875rem; opacity: 1; }
`

const fadeOutTop = keyframes`
  from { bottom: 1.875rem; opacity: 1; }
  to { bottom: -18.75rem; opacity: 0; }
`

const fadeOut = keyframes`
  from { right: 1.875rem; opacity: 1; }
  to { right: -18.75rem; opacity: 0; }
`

export const SnackbarContainer = styled.div`
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  width: auto;
  height: auto;

  min-width: 15.625rem;
  background-color: #212121;

  color: var(--white-color-00);
  white-space: nowrap;
  text-align: center;
  font-size: 1rem;

  border-radius: 0.25rem;
  border: 0.0625rem solid var(--stroke-color);
  padding: 0.875rem 1rem;

  position: fixed;
  z-index: 1000;
  right: 1.875rem;
  bottom: 1.875rem;

  animation: ${(props) => (props.$visible ? fadeIn : fadeOut)} 0.5s forwards;

  .icon {
    color: var(--primary-color);
  }

  @media (max-width: 640px) {
    position: fixed;
    z-index: 1000;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.875rem;

    white-space: wrap;

    animation: ${(props) => (props.$visible ? fadeInTop : fadeOutTop)} 0.5s
      forwards;
  }
`

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.25rem;
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.$color};
  transition: width 0.1s ease-in-out;
`
export const Icon = styled.div`
  color: ${(props) => props.color};
`
