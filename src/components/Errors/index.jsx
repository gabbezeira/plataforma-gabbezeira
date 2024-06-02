import { Container } from './styles'
import ErrorImage from '../../assets/Error/404.svg'

export function Errors() {
  return (
    <Container>
      <img
        className="error-image"
        src={ErrorImage}
        alt="Erro 404 - Página não encontrada"
      />
    </Container>
  )
}
