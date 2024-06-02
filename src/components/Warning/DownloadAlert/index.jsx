import DownloadImage from '../../../assets/Error/download.svg'
import { NotFound } from './styles'

export function DownloadNotFound(props) {
  return (
    <NotFound>
      <img
        className="notfound-image"
        src={DownloadImage}
        alt={props.NotFoundDescription}
      />
      <div className="notfound-text">{props.NotFoundDescription}</div>
    </NotFound>
  )
}
