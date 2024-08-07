import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { Container } from './styles'

export const Loader = ({ size = 48 }) => (
  <Container>
    <div className="spinner">
      <LoaderCircle style={{ width: size, height: size }} />
    </div>
  </Container>
)
