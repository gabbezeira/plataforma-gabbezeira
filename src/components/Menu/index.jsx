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
      <img className="menu-logo" src={Logo} alt="Logo Gabbezeira" />
      <nav className="menu-items">
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
          className="button colored"
          to="https://youtube.com/@gabbezeiratech"
          target="_blank"
        >
          Acessar Canal
        </Link>
        {signed ? (
          <Link className="button login" onClick={logOut}>
            <LogOut className="icon" />
            <p className="login-text">Sair</p>
          </Link>
        ) : (
          <Link className="button login" to="/Login">
            <User className="icon" />
            <p className="login-text">Entrar</p>
          </Link>
        )}
      </nav>
    </Container>
  )
}
