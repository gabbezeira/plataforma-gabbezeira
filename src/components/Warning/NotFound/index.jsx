import VideoImage from '../../../assets/Error/video.svg'
import DownloadImage from '../../../assets/Error/download.svg'
import { Container } from './styles'

const imageMap = {
  video: VideoImage,
  download: DownloadImage,
}

export function NotFound(props) {
  const selectedImage = imageMap[props.NotFoundImage]
  return (
    <Container>
      <img
        className="notfound-image"
        src={selectedImage}
        alt={props.NotFoundDescription}
      />
      <div className="notfound-text">{props.NotFoundDescription}</div>
    </Container>
  )
}
