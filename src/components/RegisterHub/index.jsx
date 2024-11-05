import { useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { Video, FolderArchive } from 'lucide-react'
import { Modal } from '../Modal'
import { VideoRegister } from './VideoRegister'
import { DownloadRegister } from './DownloadRegister'

export function RegisterHub() {
	const [modalContent, setModalContent] = useState(null)

	const openModal = (content) => {
		setModalContent(content)
	}

	const closeModal = () => {
		setModalContent(null)
	}

	return (
		<Container>
			<div className="hub-area">
				<Link
					className="hub-button"
					onClick={() => openModal(<VideoRegister onClose={closeModal} />)}
				>
					<Video className="icon" />
					<p className="text">Cadastrar vídeo</p>
				</Link>
				<Link
					className="hub-button"
					onClick={() => openModal(<DownloadRegister onClose={closeModal} />)}
				>
					<FolderArchive className="icon" />
					<p className="text">Cadastrar download</p>
				</Link>
			</div>
			{modalContent && <Modal onClose={closeModal}>{modalContent}</Modal>}
		</Container>
	)
}
