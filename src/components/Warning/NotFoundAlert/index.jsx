import VideoNotFound from '../../../assets/Error/video.svg'
import { NotFound } from './styles'

export function NotFoundAlert(props) {
  return (
    <NotFound>
      <img
        className="notfound-image"
        src={VideoNotFound}
        alt="Não existem tutoriais cadastrados"
      />
      <div className="notfound-text">{props.NotFoundDescription}</div>
    </NotFound>
  )
}
