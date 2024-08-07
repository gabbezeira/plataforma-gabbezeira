import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Title } from '../../Title'
import { Items } from '../Items'
import { Warning } from '../../Warning'
import { Container } from './styles'
import axios from 'axios'
import { Loader } from '../../Loader'

export function DownloadDetails() {
  const [downloads, setDownloads] = useState([]) // Altere para um array
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await axios.get(
          'https://plataforma-api.vercel.app/files',
        )
        if (Array.isArray(response.data)) {
          setDownloads(response.data)
        } else {
          throw new Error('Resposta inesperada da API')
        }
      } catch (err) {
        setError('Erro ao carregar arquivos')
      } finally {
        setLoading(false)
      }
    }

    fetchDownloads()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error || !downloads.length) {
    // Verifique se a lista está vazia
    return <Navigate to="/error" />
  }

  return (
    <>
      <Title
        title="Baixar Arquivos"
        subtitle="Leia o arquivo Read-me para realizar a instalação de forma correta"
      />
      <Container>
        <div className="download-area">
          {downloads.map((download) => (
            <Items
              key={download.numericId} // Adicione uma chave única para cada item
              downloadId={download.numericId}
              downloadImage={download.image}
              downloadTitle={download.title}
              downloadLink={download.link}
              showDownloadDetails={false}
              showConfetti={true}
            />
          ))}
        </div>
      </Container>
      <Warning />
    </>
  )
}
