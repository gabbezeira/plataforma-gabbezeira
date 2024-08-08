import { Container } from './styles'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Loader } from '../../Loader'
import { api } from '../../../services/api'
import { NotificationContext } from '../../../context/NotificationContext'

export function DownloadRegister({ onClose }) {
  const { loading } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')

  const { showSnackbar, snackbar } = useContext(NotificationContext)
  const [isSnackbarActive, setIsSnackbarActive] = useState(false)

  useEffect(() => {
    setIsSnackbarActive(snackbar.show)
  }, [snackbar])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { title, image, link, description }
    try {
      await api.post('/files', data)
      showSnackbar('Arquivo Cadastrado!', 'success')
      onClose()
    } catch (err) {
      showSnackbar(`Erro ao cadastrar arquivo: ${err.message}`, 'error')
    }
  }

  return (
    <Container>
      <h1 className="title">Cadastrar arquivo</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="duo-section">
            <div className="input-area">
              <h1 className="label">Nome do arquivo</h1>
              <input
                className="input-box"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-area">
              <h1 className="label">Ícone do arquivo</h1>
              <input
                className="input-box"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="input-area">
            <h1 className="label">Link do arquivo</h1>
            <input
              className="input-box"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="input-area">
            <h1 className="label">Descrição completa</h1>
            <textarea
              className="text-area-box"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
