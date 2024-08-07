import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { Items } from './Items'
import { Search } from 'lucide-react'
import { NotFound } from '../'

import axios from 'axios'
import { Loader } from '../Loader'

export function Downloads() {
  const [search, setSearch] = useState('')
  const [downloads, setDownloads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await axios.get('https://gabbezeira.vercel.app/files')
        setDownloads(response.data)
      } catch (err) {
        setError('Erro ao carregar arquivos')
      } finally {
        setLoading(false)
      }
    }

    fetchDownloads()
  }, [])

  const filteredDownloads = downloads.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Container>
      <div className="download-area">
        <div className="search">
          <Search className="icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Digite o nome do programa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="item">
          {loading ? (
            <Loader />
          ) : error ? (
            <p>{error}</p>
          ) : filteredDownloads.length > 0 ? (
            filteredDownloads
              .sort((a, b) => new Date(b.upload) - new Date(a.upload))
              .map((item) => (
                <div key={item.numericId}>
                  <Items
                    downloadId={item.numericId}
                    downloadImage={item.image}
                    downloadTitle={item.title}
                    downloadLink={item.link}
                    showDownloadDetails={false}
                    showConfetti={false}
                  />
                </div>
              ))
          ) : (
            <NotFound
              NotFoundDescription="Programa não encontrado"
              NotFoundImage="download"
            />
          )}
        </div>
      </div>
    </Container>
  )
}
