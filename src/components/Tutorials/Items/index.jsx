import { ArrowDownToLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Items(props) {
	return (
		<Container>
			<div
				className="thumb"
				style={{ backgroundImage: `url(${props.videoThumb})` }}
			/>
			<div className="side-card">
				<div className="card-top">
					<h1 className="title">{props.videoTitle}</h1>
					<p className="description">{props.videoDescription}</p>
				</div>

				<div className="card-bottom">
					<div className="video-upload">
						Enviado em <strong>{props.videoUpload}</strong>
					</div>
					<div className="card-buttons">
						<Link
							className="watch-button"
							to={props.videoLink}
							target="_blank"
							rel="noreferrer"
						>
							Assistir vídeo
						</Link>
						<Link
							className="files-button"
							to={props.videoFiles}
							target="_blank"
							rel="noreferrer"
						>
							<ArrowDownToLine className="icon" />
							Baixar arquivos usados no vídeo
						</Link>
					</div>
				</div>
			</div>
		</Container>
	)
}
