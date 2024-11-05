import { Container } from './styles'
import BannerImage from '../../assets/Brand/banner.svg'

export function Banner() {
	return <Container style={{ backgroundImage: `url(${BannerImage})` }} />
}
