import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Title } from '../../Title'
import { Items } from '../Items'
import { Warning } from '../../Warning'
import { Container } from './styles'
import axios from 'axios'
import { Loader } from '../../Loader'

export function DownloadDetails() {
  const { numericId } = useParams()
  const [download, setDownload] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDownloadDetails = async () => {
      try {
        console.log(`Fetching details for numericId: ${numericId}`)
        const response = await axios.get(
          `https://gabbezeira.vercel.app/files/${numericId}`,
          { responseType: 'text' }, // Temporariamente configurado como 'text' para ver o conteúdo
        )
        console.log('Full API response:', response) // Log completo da resposta
        console.log('Response data type:', typeof response.data)
        console.log('Response data:', response.data)

        // Verifique o conteúdo da resposta
        try {
          const data = JSON.parse(response.data)
          if (data && typeof data === 'object') {
            setDownload(data)
          } else {
            throw new Error('Unexpected response format')
          }
        } catch (parseError) {
          throw new Error('Failed to parse JSON response')
        }
      } catch (err) {
        console.error('Error fetching download details:', err)
        setError('Arquivo não encontrado')
      } finally {
        setLoading(false)
      }
    }

    fetchDownloadDetails()
  }, [numericId])

  if (loading) {
    return <Loader />
  }

  if (error || !download) {
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
          <Items
            downloadImage={download.image}
            downloadTitle={download.title}
            downloadLink={download.link}
            showDownloadDetails={false}
            showConfetti={true}
          />
        </div>
      </Container>
      <Warning />
    </>
  )
}
