import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { Container } from './styles'

export const Loader = ({ size = 48 }) => (
  <Container>
    <LoaderCircle className="spinner" style={{ width: size, height: size }} />
  </Container>
)
