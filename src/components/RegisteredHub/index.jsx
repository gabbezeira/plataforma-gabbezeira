import { Container } from './styles'
import { Link } from 'react-router-dom'
import { Video, FolderArchive } from 'lucide-react'

export function RegisteredHub() {
  return (
    <Container>
      <div className="hub-area">
        <Link className="hub-button" to="/register-hub">
          <Video className="icon" />
          <p className="text">Vídeos Cadastrados</p>
        </Link>
        <Link className="hub-button" to="/register-hub">
          <FolderArchive className="icon" />
          <p className="text">Downloads Cadastrados</p>
        </Link>
      </div>
    </Container>
  )
}
