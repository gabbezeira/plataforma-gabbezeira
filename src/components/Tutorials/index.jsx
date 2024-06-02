import { Container } from './styles'
import TutorialsItems from '../../mocks/tutorials-items.json'
import { Items } from './Items'

export function Tutorials() {
  return (
    <Container>
      {TutorialsItems.map((video) => (
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
      ))}
    </Container>
  )
}
