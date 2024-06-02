import { Container } from './styles'

export function BetaAlert() {
  return (
    <Container>
      <div className="alert">
        <p className="text">
          Esse é a versão beta da plataforma, caso tenha algum erro favor entrar
          em contato com o
          <a className="text-link" href="https://instagram.com/gabbezeira/">
            Suporte
          </a>
        </p>
      </div>
    </Container>
  )
}
