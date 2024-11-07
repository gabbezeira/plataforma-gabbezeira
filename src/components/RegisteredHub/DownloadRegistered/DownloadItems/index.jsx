import { Link as LinkIcon, Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../../../context/NotificationContext'
import { Container } from './styles'

export function Items(props) {
	const { showSnackbar } = useContext(NotificationContext)

	const handleCopyLink = () => {
		const link = `${window.location.origin}/downloads/${props.downloadSlug}`
		navigator.clipboard
			.writeText(link)
			.then(() => {
				showSnackbar('Link copiado para a área de transferência!', 'success')
			})
			.catch((err) => {
				showSnackbar(`Erro ao copiar link: ${err.message}`, 'error')
			})
	}

	return (
		<Container>
			<div className="left-content">
				<div
					className="thumb"
					style={{ backgroundImage: `url(${props.downloadImage})` }}
				/>
				<h1 className="title">{props.downloadTitle}</h1>
			</div>

			<div className="right-content">
				<Link className="button outline" onClick={handleCopyLink}>
					<LinkIcon className="icon" />
				</Link>
				<Link
					className="button"
					onClick={() => props.onDelete(props.downloadId)}
				>
					<Trash2 className="icon" />
				</Link>
			</div>
		</Container>
	)
}
