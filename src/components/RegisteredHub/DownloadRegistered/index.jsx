import { useEffect, useState, useContext } from 'react'
import { Container } from './styles'
import { Items } from './DownloadItems'
import { Search } from 'lucide-react'
import { Pagination, NotFound, Modal } from '../../'
import axios from 'axios'
import { Loader } from '../../Loader'
import { NotificationContext } from '../../../context/NotificationContext'
import DeleteImage from '../../../assets/Error/delete.svg'
import { ConfirmModal } from '../../Modal/ConfirmModal'

export function DownloadRegistered() {
	const [search, setSearch] = useState('')
	const [downloads, setDownloads] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedDownloadId, setSelectedDownloadId] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)

	const { showSnackbar } = useContext(NotificationContext)
	const itemsPerPage = 3

	useEffect(() => {
		const fetchDownloads = async () => {
			try {
				const response = await axios.get(
					'https://plataforma-api.vercel.app/files',
				)
				if (Array.isArray(response.data)) {
					setDownloads(response.data)
				} else {
					throw new Error('Resposta inesperada da API')
				}
			} catch (err) {
				setError('Erro ao carregar arquivos')
			} finally {
				setLoading(false)
			}
		}

		fetchDownloads()
	}, [])

	const handleDeleteClick = (id) => {
		setSelectedDownloadId(id)
		setIsModalOpen(true)
	}

	const handleConfirmDelete = async () => {
		try {
			const token = localStorage.getItem('@Auth:token')
			await axios.delete(
				`https://plataforma-api.vercel.app/files/${selectedDownloadId}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			showSnackbar('Arquivo Deletado!', 'success')
			setDownloads(
				downloads.filter((item) => item.numericId !== selectedDownloadId),
			)
		} catch (err) {
			showSnackbar(`Erro ao deletar arquivo: ${err.message}`, 'error')
		} finally {
			setIsModalOpen(false)
			setSelectedDownloadId(null)
		}
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedDownloadId(null)
	}

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const filteredDownloads = Array.isArray(downloads)
		? downloads.filter((item) =>
				item.title.toLowerCase().includes(search.toLowerCase()),
			)
		: []

	const totalPages = Math.ceil(filteredDownloads.length / itemsPerPage)
	const currentDownloads = filteredDownloads.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	return (
		<Container>
			<div className="download-area">
				<div className="search">
					<Search className="icon" />
					<input
						className="search-input"
						type="search"
						placeholder="Digite o nome do programa"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="item">
					{loading ? (
						<Loader />
					) : error ? (
						<NotFound NotFoundDescription={error} NotFoundImage="download" />
					) : currentDownloads.length > 0 ? (
						currentDownloads
							.sort((a, b) => new Date(b.upload) - new Date(a.upload))
							.map((item) => (
								<div key={item.numericId}>
									<Items
										downloadId={item.numericId}
										downloadImage={item.image}
										downloadTitle={item.title}
										downloadSlug={item.slug}
										onDelete={handleDeleteClick}
									/>
								</div>
							))
					) : (
						<NotFound
							NotFoundDescription="Programa não encontrado"
							NotFoundImage="download"
						/>
					)}
				</div>
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>

			{isModalOpen && (
				<Modal onClose={handleCloseModal}>
					<ConfirmModal
						DeleteImage={DeleteImage}
						onDelete={handleConfirmDelete}
						onClose={handleCloseModal}
					/>
				</Modal>
			)}
		</Container>
	)
}
