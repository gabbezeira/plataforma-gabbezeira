import React from 'react'
import { Banner, Errors, Footer, Menu, Title } from '../components'
import { Body, PageWrapper } from '../styles/styles'

export function Error() {
	return (
		<PageWrapper>
			<Menu />
			<Banner />
			<Body>
				<Errors />
				<Title title="Erro 404" subtitle="A página não foi encontrada" />
			</Body>
			<Footer />
		</PageWrapper>
	)
}
