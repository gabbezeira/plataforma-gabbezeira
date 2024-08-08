import { Container } from './styles'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Loader } from '../../Loader'
import { api } from '../../../services/api'
import { NotificationContext } from '../../../context/NotificationContext'

export function VideoRegister({ onClose }) {
  const { loading } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [thumb, setThumb] = useState('')
  const [files, setFiles] = useState('')

  const { showSnackbar, snackbar } = useContext(NotificationContext)
  const [isSnackbarActive, setIsSnackbarActive] = useState(false)

  useEffect(() => {
    setIsSnackbarActive(snackbar.show)
  }, [snackbar])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { title, description, link, thumb, files }
    try {
      await api.post('/videos', data)
      showSnackbar('Vídeo Cadastrado!', 'success')
      onClose()
    } catch (error) {
      showSnackbar('Erro ao cadastrar vídeo:', error, 'error')
    }
  }

  return (
    <Container>
      <h1 className="title">Cadastrar vídeo</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="duo-section">
            <div className="input-area">
              <h1 className="label">Nome do vídeo</h1>
              <input
                className="input-box"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-area">
              <h1 className="label">Descrição</h1>
              <input
                className="input-box"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="input-area">
            <h1 className="label">Link do vídeo</h1>
            <input
              className="input-box"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="duo-section">
            <div className="input-area">
              <h1 className="label">Link da thumb</h1>
              <input
                className="input-box"
                type="text"
                value={thumb}
                onChange={(e) => setThumb(e.target.value)}
              />
            </div>
            <div className="input-area">
              <h1 className="label">Link do arquivo</h1>
              <input
                className="input-box"
                type="text"
                value={files}
                onChange={(e) => setFiles(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={onClose}
            disabled={loading || isSnackbarActive}
          >
            {loading || isSnackbarActive ? <Loader size={24} /> : 'Cancelar'}
          </button>
          <button className="button colored" type="submit" disabled={loading}>
            {loading ? <Loader size={24} /> : 'Cadastrar'}
          </button>
        </div>
      </form>
    </Container>
  )
}
