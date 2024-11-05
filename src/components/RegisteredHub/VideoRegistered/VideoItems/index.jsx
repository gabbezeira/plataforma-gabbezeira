import { Container } from './styles'
import { Link } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'

export function Items(props) {
	return (
		<Container>
			<div className="left-content">
				<h1 className="title">{props.videoTitle}</h1>
			</div>

			<div className="right-content">
				<Link className="button outline" onClick={props.handleUpdateLink}>
					<Pencil className="icon" />
				</Link>
				<Link className="button" onClick={() => props.onDelete(props.videoId)}>
					<Trash2 className="icon" />
				</Link>
			</div>
		</Container>
	)
}
