import React, { useEffect, useState, useContext } from 'react'
import { Container } from './styles'
import { Items } from './VideoItems'
import { Search } from 'lucide-react'
import { Pagination, NotFound, Modal } from '../../'

import axios from 'axios'
import { Loader } from '../../Loader'
import { NotificationContext } from '../../../context/NotificationContext'
import DeleteImage from '../../../assets/Error/delete.svg'

export function VideoRegistered() {
  const [search, setSearch] = useState('')
  const [video, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideoId, setSelectedVideoId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { showSnackbar } = useContext(NotificationContext)
  const itemsPerPage = 3

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          'https://plataforma-api.vercel.app/videos',
        )
        if (Array.isArray(response.data)) {
          setVideo(response.data)
        } else {
          throw new Error('Resposta inesperada da API')
        }
      } catch (err) {
        setError('Erro ao carregar arquivos')
      } finally {
        setLoading(false)
      }
    }

    fetchVideo()
  }, [])

  const handleDeleteClick = (id) => {
    setSelectedVideoId(id)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem('@Auth:token')
      await axios.delete(
        `https://plataforma-api.vercel.app/videos/${selectedVideoId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      showSnackbar('Arquivo Deletado!', 'success')
      setVideo(video.filter((item) => item.numericId !== selectedVideoId))
    } catch (err) {
      showSnackbar(`Erro ao deletar arquivo: ${err.message}`, 'error')
    } finally {
      setIsModalOpen(false)
      setSelectedVideoId(null)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideoId(null)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const filteredVideos = Array.isArray(video)
    ? video.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : []

  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage)

  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <Container>
      <div className="video-area">
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
          ) : currentVideos.length > 0 ? (
            currentVideos
              .sort((a, b) => new Date(b.upload) - new Date(a.upload))
              .map((item) => (
                <div key={item.numericId}>
                  <Items
                    videoId={item.numericId}
                    videoImage={item.thumb}
                    videoTitle={item.title}
                    onDelete={handleDeleteClick}
                  />
                </div>
              ))
          ) : (
            <NotFound
              NotFoundDescription="Vídeo não encontrado"
              NotFoundImage="video"
            />
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="confirm-modal">
            <p className="title">Tem certeza que deseja deletar este item?</p>
            <img
              className="image"
              src={DeleteImage}
              alt="Imagem de um rapaz jogando um arquivo no lixo"
            />
            <div className="buttons">
              <button className="button colored" onClick={handleConfirmDelete}>
                Deletar
              </button>
              <button className="button" onClick={handleCloseModal}>
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Container>
  )
}
