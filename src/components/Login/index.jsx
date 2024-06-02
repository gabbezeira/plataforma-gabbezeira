import { Title } from '../Title'
import { Container } from './styles'

export function Login() {
  return (
    <Container>
      <form className="form" action="">
        <Title title="Login" subtitle="Acesse o painel administrativo" />
        <div className="form-inputs">
          <div className="input-area">
            <h1 className="label">Nome de Usuário</h1>
            <input
              className="input-box"
              type="text"
              placeholder="Digite o usuário"
            />
          </div>
          <div className="input-area">
            <h1 className="label">Senha</h1>
            <input
              className="input-box"
              type="password"
              placeholder="Digite a senha"
            />
          </div>
        </div>
        <button className="form-button" type="submit">
          Entrar no Painel
        </button>
      </form>
    </Container>
  )
}
