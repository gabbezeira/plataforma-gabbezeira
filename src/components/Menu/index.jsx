import { Container } from './styles'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import Logo from '../../assets/Brand/logo.svg'

export function Menu() {
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
        <Link className="button login" to="/Login">
          <User className="icon" />
          <p className="login-text">Entrar</p>
        </Link>
      </nav>
    </Container>
  )
}
