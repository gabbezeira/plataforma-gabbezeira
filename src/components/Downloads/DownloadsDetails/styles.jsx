import styled from 'styled-components'
import '../../../styles/index.css'

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
