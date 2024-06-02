import VideoImage from '../../../assets/Error/video.svg'
import { NotFound } from './styles'

export function VideoNotFound(props) {
  return (
    <NotFound>
      <img
        className="notfound-image"
        src={VideoImage}
        alt={props.NotFoundDescription}
      />
      <div className="notfound-text">{props.NotFoundDescription}</div>
    </NotFound>
  )
}
