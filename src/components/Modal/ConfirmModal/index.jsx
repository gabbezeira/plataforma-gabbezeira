import { ModalContainer } from './styles'

export function ConfirmModal(props) {
	return (
		<ModalContainer className="confirm-modal">
			<p className="title">Tem certeza que deseja deletar este item?</p>
			<img
				className="image"
				src={props.DeleteImage}
				alt="Imagem de um rapaz jogando um arquivo no lixo"
			/>
			<div className="buttons">
				<button className="button colored" onClick={props.onDelete}>
					Deletar
				</button>
				<button className="button" onClick={props.onClose}>
					Cancelar
				</button>
			</div>
		</ModalContainer>
	)
}
