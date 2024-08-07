import { useEffect, useState } from 'react'
import { Container } from './styles'
import { Items } from './Items'
import { NotFound } from '../'

import axios from 'axios'
import { Loader } from '../Loader'

const convertFirestoreTimestamp = (timestamp) => {
  const seconds = timestamp._seconds
  const nanoseconds = timestamp._nanoseconds
  const date = new Date(seconds * 1000 + nanoseconds / 1000000)
  return date.toLocaleDateString()
}

export function Tutorials() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://gabbezeira.vercel.app/videos')
        setVideos(response.data)
      } catch (err) {
        setError('Erro ao carregar vídeos')
        console.error('Error fetching videos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <Container>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.numericId}>
            <Items
              videoThumb={video.thumb}
              videoTitle={video.title}
              videoDescription={video.description}
              videoUpload={convertFirestoreTimestamp(video.upload)} // Convertendo o timestamp
              videoLink={video.link}
              videoFiles={video.files}
            />
          </div>
        ))
      ) : (
        <NotFound
          NotFoundDescription="Não existem tutoriais cadastrados"
          NotFoundImage="video"
        />
      )}
    </Container>
  )
}
