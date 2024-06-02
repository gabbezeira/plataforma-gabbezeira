import { Container } from './styles'
import { Link } from 'react-router-dom'
import { ArrowDownToLine } from 'lucide-react'

export function Items(props) {
  return (
    <Container>
      <div className="left-content">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${props.downloadImage})` }}
        />
        <h1 className="title">{props.downloadTitle}</h1>
      </div>

      <Link
        className="download-button"
        to={props.downloadLink}
        target="_blank"
        rel="noreferrer"
      >
        <ArrowDownToLine className="icon" />
        Baixar
      </Link>
    </Container>
  )
}
