import { Container } from './styles'
import { Link } from 'react-router-dom'
import Gmail from '../../assets/social/gmail.svg'
import Instagram from '../../assets/social/instagram.svg'
import Youtube from '../../assets/social/youtube.svg'

export function Contacts() {
  return (
    <Container>
      <Link
        className="social-media"
        to="mailto:gabbezeira@gmail.com"
        target="_blank"
      >
        <img className="image" alt="email" src={Gmail} />
        <p className="text">gabbezeira@gmail.com</p>
      </Link>

      <Link
        className="social-media"
        to="https://instagram.com/gabbezeira/"
        target="_blank"
      >
        <img
          className="image"
          alt="instagram"
          src={Instagram}
          style={{ height: '2.5rem' }}
        />
        <p className="text">@gabbezeira</p>
      </Link>

      <Link
        className="social-media"
        to="https://youtube.com/@gabbezeiratech"
        target="_blank"
      >
        <img className="image" alt="youtube" src={Youtube} />
        <p className="text">@gabbezeiratech</p>
      </Link>
    </Container>
  )
}
