import { Container } from './styles'
import { Link } from 'react-router-dom'
import { Film, FolderDown, Contact, Youtube } from 'lucide-react'

export function Painel() {
	return (
		<Container>
			<div className="painel-area">
				<Link className="painel-button" to="/">
					<Film className="icon" />
					<p className="text">Tutoriais</p>
				</Link>
				<Link className="painel-button" to="/downloads">
					<FolderDown className="icon" />
					<p className="text">Downloads</p>
				</Link>
				<Link className="painel-button" to="/contact">
					<Contact className="icon" />
					<p className="text">Contato</p>
				</Link>
				<Link
					className="painel-button"
					to="https://youtube.com/@gabbezeiratech"
					target="_blank"
				>
					<Youtube className="icon" />
					<p className="text">Acessar Canal</p>
				</Link>
			</div>
		</Container>
	)
}
