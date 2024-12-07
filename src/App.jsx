import { Outlet } from 'react-router-dom'
import { Banner, Footer, Menu } from './components'
import { Body, PageWrapper } from './styles/styles'

import { Analytics } from '@vercel/analytics/react'

export default function App() {
	return (
		<PageWrapper>
			<Menu />
			<Banner />
			<Body>
				<Outlet />
			</Body>
			<Analytics />
			<Footer />
		</PageWrapper>
	)
}
