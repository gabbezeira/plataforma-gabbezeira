import { useState } from 'react'
import { Container, ModalContent } from './styles'
import { HandCoins, LinkIcon } from 'lucide-react'
import { Modal } from '../Modal'
import qrCodeImage from '../../assets/qrcode.png'

export function DonateButton() {
  const [modalContent, setModalContent] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const pixCode =
    '00020126720014br.gov.bcb.pix0136ac588dff-1efa-43ee-a34e-483fd18136020210Gabbezeira5204000053039865802BR5901N6001C62070503***630482FC'

  const openModal = () => {
    setModalContent(
      <ModalContent>
        <h2 className="title">Apoie o Canal com PIX</h2>
        <p className="description">
          Escaneie o QR Code abaixo para fazer sua contribuição. Seu apoio nos
          ajuda a continuar criando conteúdo de qualidade!
        </p>
        <img
          className="qr"
          src={qrCodeImage}
          alt="QR Code para doação via PIX"
          width={200}
          height={200}
        />
        <div className="copy" onClick={() => handleCopy(pixCode)}>
          <LinkIcon size={18} />
          <p className="copy-text">
            {copySuccess ? 'Copiado!' : 'Pix copia e cola'}
          </p>
        </div>
      </ModalContent>,
    )
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000) // Feedback "Copiado!" por 2 segundos
    })
  }

  const closeModal = () => {
    setModalContent(null)
    setCopySuccess(false)
  }

  return (
    <>
      <Container onClick={openModal}>
        <HandCoins className="icon" />
        <p className="text">Apoie o Canal</p>
      </Container>
      {modalContent && <Modal onClose={closeModal}>{modalContent}</Modal>}
    </>
  )
}
