import { Container } from './styles'
import TutorialsItems from '../../mocks/tutorials-items.json'
import { Items } from './Items'
import { NotFoundAlert } from '../'

export function Tutorials() {
  const videos = TutorialsItems

  return (
    <Container>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id}>
            <Items
              videoThumb={video.thumb}
              videoTitle={video.title}
              videoDescription={video.description}
              videoUpload={video.upload}
              videoLink={video.link}
              videoFiles={video.files}
            />
          </div>
        ))
      ) : (
        <NotFoundAlert NotFoundDescription="Não existem tutoriais cadastrados" />
      )}
    </Container>
  )
}
