import React from 'react'
import { Menu, Footer, DownloadDetails, Banner } from '../components'
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
