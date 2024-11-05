import React from 'react'
import { Warning, Title, Downloads, Alert } from '../components'

export function DownloadPage() {
	return (
		<>
			<Alert />
			<Title
				title="Downloads"
				subtitle="Baixe os arquivos utilizados nos vídeos do canal"
			/>
			<Downloads />
			<Warning />
		</>
	)
}
