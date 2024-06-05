import { useParams, Navigate } from 'react-router-dom'
import DownloadsItems from '../../../mocks/downloads-items.json'
import { Title } from '../../Title'
import { Items } from '../Items'
import { Warning } from '../../Warning'
import { Container } from './styles'

export function DownloadDetails() {
  const { id } = useParams()
  const download = DownloadsItems.find((item) => item.id === parseInt(id))

  if (!download) {
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
            downloadImage={download.image}
            downloadTitle={download.title}
            downloadLink={download.link}
            showDownloadDetails={false}
            showConfetti={true}
          />
        </div>
      </Container>
      <Warning />
    </>
  )
}
