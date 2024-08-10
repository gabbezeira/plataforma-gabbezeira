import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Items } from './Items'
import { Search } from 'lucide-react'
import { NotFound, Pagination } from '../'
import axios from 'axios'
import { Loader } from '../Loader'

export function Downloads() {
  const [search, setSearch] = useState('')
  const [downloads, setDownloads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 4

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

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const filteredDownloads = Array.isArray(downloads)
    ? downloads.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : []

  const totalPages = Math.ceil(filteredDownloads.length / itemsPerPage)

  const currentDownloads = filteredDownloads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
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
            <NotFound NotFoundDescription={error} NotFoundImage="download" />
          ) : currentDownloads.length > 0 ? (
            currentDownloads
              .sort((a, b) => new Date(b.upload) - new Date(a.upload))
              .map((item) => (
                <div key={item.numericId}>
                  <Items
                    downloadId={item.numericId}
                    downloadImage={item.image}
                    downloadTitle={item.title}
                    downloadLink={item.link}
                    downloadSlug={item.slug}
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  )
}
