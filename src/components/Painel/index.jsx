import { Container } from './styles'
import Image from '../../assets/Error/painel.svg'

export function Painel() {
  return (
    <Container>
      <img className="error-image" src={Image} alt="Você está logado" />
    </Container>
  )
}
