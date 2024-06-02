import React from 'react'
import { Menu, Banner, Footer, Errors, Title } from '../components'
import { Body } from '../styles/styles'

export function Error() {
  return (
    <>
      <Menu />
      <Banner />
      <Body>
        <Title title="Erro 404" subtitle="A página não foi encontrada" />
        <Errors />
      </Body>
      <Footer />
    </>
  )
}
