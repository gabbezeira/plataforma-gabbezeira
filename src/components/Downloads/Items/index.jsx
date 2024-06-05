import { Container } from './styles'
import { Link } from 'react-router-dom'
import { ArrowDownToLine } from 'lucide-react'
import confetti from 'canvas-confetti'

export function Items(props) {
  const handleDownloadButtonClick = (event) => {
    event.preventDefault()
    confetti({
      particleCount: 400,
      spread: 100,
      origin: { y: 0.6 },
    })

    setTimeout(() => {
      window.location.href = props.downloadLink
    }, 300)
  }

  return (
    <Container>
      <div className="left-content">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${props.downloadImage})` }}
        />
        <h1 className="title">{props.downloadTitle}</h1>
      </div>

      <div className="right-content">
        <Link
          className="download-button"
          to={props.downloadLink}
          target="_blank"
          onClick={props.showConfetti ? handleDownloadButtonClick : null}
        >
          <ArrowDownToLine className="icon" />
          Baixar
        </Link>

        {props.showDownloadDetails && (
          <Link
            className="download-details"
            to={`/downloads/${props.downloadId}`}
          >
            Ver Mais
          </Link>
        )}
      </div>
    </Container>
  )
}
