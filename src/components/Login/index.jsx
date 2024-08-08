import React, { useState, useContext, useEffect } from 'react'
import { Title } from '../Title'
import { Container } from './styles'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../Loader'
import { NotificationContext } from '../../context/NotificationContext'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signed, loading } = useContext(AuthContext)
  const { showSnackbar, snackbar } = useContext(NotificationContext)

  const isFormValid = email.trim() !== '' && password.trim() !== ''
  const [isSnackbarActive, setIsSnackbarActive] = useState(false)

  useEffect(() => {
    setIsSnackbarActive(snackbar.show)
  }, [snackbar])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) {
      showSnackbar('Por favor, preencha todos os campos.', 'info')
      return
    }
    const data = { email, password }
    try {
      await signIn(data)
    } catch (error) {
      showSnackbar(
        'Falha ao realizar login. Verifique suas credenciais.',
        'error',
      )
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
        <button
          className="form-button"
          type="submit"
          disabled={loading || isSnackbarActive}
        >
          {loading ? <Loader size={28} /> : 'Entrar'}
        </button>
      </form>
    </Container>
  )
}
