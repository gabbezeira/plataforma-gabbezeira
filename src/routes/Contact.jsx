import React from 'react'
import { Warning, Title, Contacts } from '../components'

export function Contact() {
  return (
    <>
      <Title
        title="Contatos"
        subtitle="Entre em contanto comigo caso tenha alguma dúvida"
      />
      <Contacts />
      <Warning />
    </>
  )
}
