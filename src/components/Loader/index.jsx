import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { Container } from './styles'

export function Loader({ size = 48 }) {
	return (
		<Container>
			<LoaderCircle className="spinner" style={{ width: size, height: size }} />
		</Container>
	)
}
