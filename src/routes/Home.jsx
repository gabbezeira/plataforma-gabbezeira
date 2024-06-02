import React from 'react'
import { Title, Warning, Tutorials } from '../components'

export function Home() {
  return (
    <>
      <Title
        title="Tutoriais"
        subtitle="Fique por dentro dos últimos vídeos do canal"
      />
      <Tutorials />
      <Warning />
    </>
  )
}
