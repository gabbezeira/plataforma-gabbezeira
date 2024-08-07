import React from 'react'
import { Title, RegisterHub } from '../components'

export function RegisterPainel() {
  return (
    <>
      <Title
        title="Cadastro"
        subtitle="Selecione o que você deseja cadastrar"
      />
      <RegisterHub />
    </>
  )
}
