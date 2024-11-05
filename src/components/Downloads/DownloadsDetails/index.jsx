import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Title } from '../../Title'
import { Items } from '../Items'
import { Warning } from '../../Warning'
import { Container } from './styles'
import axios from 'axios'
import { Loader } from '../../Loader'
import { DonateButton } from '../../Donate'

export function DownloadDetails() {
	const { slug } = useParams()
	const [download, setDownload] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchDownload = async () => {
			try {
				const response = await axios.get(
					`https://plataforma-api.vercel.app/files/${slug}`,
				)

				if (response.data) {
					setDownload(response.data)
				} else {
					throw new Error('Download não encontrado')
				}
			} catch (err) {
				setError('Erro ao carregar o arquivo')
			} finally {
				setLoading(false)
			}
		}

		fetchDownload()
	}, [slug])

	if (loading) {
		return <Loader />
	}

	if (error || !download) {
		return <Navigate to="/error" />
	}

	return (
		<>
			<Title
				title="Baixar Arquivos"
				subtitle="Leia o arquivo Read-me para realizar a instalação de forma correta"
			/>
			<Container>
				<div className="download-area">
					<Items
						key={download.numericId}
						downloadId={download.numericId}
						downloadImage={download.image}
						downloadTitle={download.title}
						downloadLink={download.link}
						showDownloadDetails={false}
						showConfetti={true}
					/>
				</div>
			</Container>
			<DonateButton />
			<Warning />
		</>
	)
}
