import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-top: 5rem;
  background-size: cover;
  background-position: center;
  user-select: none;

  @media (max-width: 640px) {
    margin-top: 7.5rem;
  }
`
