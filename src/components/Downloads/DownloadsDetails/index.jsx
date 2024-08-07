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
          { responseType: 'text' }, // Receber a resposta como texto
        )

        console.log('Full API response:', response)
        console.log('Response data type:', typeof response.data)
        console.log('Response data:', response.data)

        // Verifique se a resposta é HTML
        if (
          response.data.startsWith('<!doctype html>') ||
          response.data.startsWith('<html')
        ) {
          throw new Error('Response is HTML, not JSON')
        }

        // Tente analisar o JSON da resposta
        try {
          const data = JSON.parse(response.data)
          if (data && typeof data === 'object') {
            setDownload(data)
          } else {
            throw new Error('Unexpected JSON format')
          }
        } catch (parseError) {
          throw new Error('Failed to parse JSON response')
        }
      } catch (err) {
        console.error('Error fetching download details:', err)
        setError('Arquivo não encontrado ou erro no servidor')
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
