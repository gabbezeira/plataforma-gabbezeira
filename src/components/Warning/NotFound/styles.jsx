import styled from 'styled-components'
import '../../../styles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 100%;
  height: auto;

  .notfound-image {
    width: auto;
    height: 13rem;
  }

  .notfound-text {
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto;
    height: 3.125rem;

    padding: 0px 1.5rem;

    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--primary-color);

    border: 0.0625rem solid var(--primary-color);
    border-radius: 0.3125rem;
  }
`
