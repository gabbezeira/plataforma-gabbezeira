import { Title } from '../Title'
import { Container } from './styles'
import { Navigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { LoaderCircle } from 'lucide-react' // Importa um ícone de carregamento

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signed, loading } = useContext(AuthContext) // Adiciona loading

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    try {
      await signIn(data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  if (signed) {
    return <Navigate to="/painel" />
  }

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit}>
        <Title title="Login" subtitle="Acesse o painel administrativo" />
        <div className="form-inputs">
          <div className="input-area">
            <h1 className="label">Email</h1>
            <input
              className="input-box"
              type="email"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-area">
            <h1 className="label">Senha</h1>
            <input
              className="input-box"
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="form-button" type="submit" disabled={loading}>
          {loading ? <LoaderCircle className="spinner" /> : 'Entrar'}
        </button>
      </form>
    </Container>
  )
}
