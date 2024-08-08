import { Container } from './styles'
import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import Logo from '../../assets/Brand/logo.svg'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export function Menu() {
  const { signed, logOut } = useContext(AuthContext)

  return (
    <Container>
      <Link to="/">
        <img className="menu-logo" src={Logo} alt="Logo Gabbezeira" />
      </Link>
      <nav className="menu-items">
        {signed ? (
          <>
            <Link className="button" to="/painel">
              <p>Painel</p>
            </Link>
            <Link className="button" to="/register-hub">
              <p>Cadastrar</p>
            </Link>
            <Link className="button" to="/registered-hub">
              <p>Cadastrados</p>
            </Link>
            <Link className="button colored" onClick={logOut}>
              <LogOut className="icon" />
              <p className="text">Sair</p>
            </Link>
          </>
        ) : (
          <>
            <Link className="button" to="/">
              Tutoriais
            </Link>
            <Link className="button" to="/downloads">
              Downloads
            </Link>
            <Link className="button" to="/contact">
              Contato
            </Link>
            <Link
              className="button colored none-button"
              to="https://youtube.com/@gabbezeiratech"
              target="_blank"
            >
              Acessar Canal
            </Link>
            <Link className="button login" to="/login">
              <User className="icon" />
              <p className="login-text">Entrar</p>
            </Link>
          </>
        )}
      </nav>
    </Container>
  )
}
