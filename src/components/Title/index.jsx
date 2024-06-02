import { Container } from './styles'

export function Title(props) {
  return (
    <Container>
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </Container>
  )
}
