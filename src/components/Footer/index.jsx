import { Container } from './styles'

export function Footer() {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <Container>
      <p className="copy-text">
        &copy;{currentYear} Desenvolvido por <strong>Gabriel Alves</strong>
      </p>
    </Container>
  )
}
