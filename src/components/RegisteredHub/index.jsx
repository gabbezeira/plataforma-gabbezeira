import { useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { MonitorPlay, Folders } from 'lucide-react'
import { DownloadRegistered } from './DownloadRegistered'
import { VideoRegistered } from './VideoRegistered'
import { Modal } from '../Modal'

export function RegisteredHub() {
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
					to="/registered-hub"
					onClick={() => openModal(<VideoRegistered onClose={closeModal} />)}
				>
					<MonitorPlay className="icon" />
					<p className="text">Vídeos Cadastrados</p>
				</Link>
				<Link
					className="hub-button"
					to="/registered-hub"
					onClick={() => openModal(<DownloadRegistered onClose={closeModal} />)}
				>
					<Folders className="icon" />
					<p className="text">Downloads Cadastrados</p>
				</Link>
			</div>
			{modalContent && <Modal onClose={closeModal}>{modalContent}</Modal>}
		</Container>
	)
}
