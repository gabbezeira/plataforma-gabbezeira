import React from 'react'
import { Banner, DownloadDetails, Footer, Menu } from '../components'
import { Body, PageWrapper } from '../styles/styles'

export function DownloadDetailsPage() {
	return (
		<PageWrapper>
			<Menu />
			<Banner />
			<Body>
				<DownloadDetails />
			</Body>
			<Footer />
		</PageWrapper>
	)
}
