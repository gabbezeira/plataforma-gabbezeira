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
        const response = await axios.get(
          `http://localhost:3001/files/${numericId}`,
        )
        setDownload(response.data)
      } catch (err) {
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
