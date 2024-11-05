import { useEffect, useState } from 'react'
import { Container } from './styles'
import { Items } from './Items'
import { NotFound, Pagination } from '../'
import axios from 'axios'
import { Loader } from '../Loader'

const convertFirestoreTimestamp = (timestamp) => {
	const seconds = timestamp._seconds
	const nanoseconds = timestamp._nanoseconds
	const date = new Date(seconds * 1000 + nanoseconds / 1000000)
	return date.toLocaleDateString()
}

export function Tutorials() {
	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 3

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await axios.get(
					'https://plataforma-api.vercel.app/videos',
				)
				if (Array.isArray(response.data)) {
					setVideos(response.data)
				} else {
					throw new Error('Resposta inesperada da API')
				}
			} catch (err) {
				setError('Erro ao carregar vídeos')
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()
	}, [])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <NotFound NotFoundDescription={error} NotFoundImage="video" />
	}

	const indexOfLastVideo = currentPage * itemsPerPage
	const indexOfFirstVideo = indexOfLastVideo - itemsPerPage
	const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo)

	return (
		<Container>
			{currentVideos.length > 0 ? (
				<>
					{currentVideos.map((video) => (
						<div key={video.numericId}>
							<Items
								videoThumb={video.thumb}
								videoTitle={video.title}
								videoDescription={video.description}
								videoUpload={convertFirestoreTimestamp(video.upload)}
								videoLink={video.link}
								videoFiles={video.files}
							/>
						</div>
					))}
					<Pagination
						currentPage={currentPage}
						totalPages={Math.ceil(videos.length / itemsPerPage)}
						onPageChange={setCurrentPage}
					/>
				</>
			) : (
				<NotFound
					NotFoundDescription="Não existem tutoriais cadastrados"
					NotFoundImage="video"
				/>
			)}
		</Container>
	)
}
