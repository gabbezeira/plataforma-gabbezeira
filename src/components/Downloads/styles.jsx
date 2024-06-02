import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .item {
    display: flex;
    flex-direction: column;

    gap: 1.25rem;

    width: 80%;
    height: 100%;
  }

  @media (max-width: 640px) {
    .item {
      width: 100%;
    }
  }
`
