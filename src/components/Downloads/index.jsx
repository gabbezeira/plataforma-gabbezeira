import { Container } from './styles'
import DownloadsItems from '../../mocks/downloads-items.json'
import { Items } from './Items'

export function Downloads() {
  return (
    <Container>
      <div className="item">
        {DownloadsItems.map((item) => (
          <div key={item.id}>
            <Items
              downloadImage={item.image}
              downloadTitle={item.title}
              downloadLink={item.link}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
