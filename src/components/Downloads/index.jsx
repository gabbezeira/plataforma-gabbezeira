import React from 'react'
import { Container } from './styles'
import DownloadsItems from '../../mocks/downloads-items.json'

import { Items } from './Items'
import { Search } from 'lucide-react'
import { DownloadNotFound } from '../'

export function Downloads() {
  const [search, setSearch] = React.useState('')

  const downloads = DownloadsItems.filter((downloads) =>
    downloads.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  )

  return (
    <Container>
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
        {downloads.length > 0 ? (
          downloads.map((item) => (
            <div key={item.id}>
              <Items
                downloadImage={item.image}
                downloadTitle={item.title}
                downloadLink={item.link}
              />
            </div>
          ))
        ) : (
          <DownloadNotFound
            NotFoundDescription="Programa não encontrado"
            NotFoundImage="video"
          />
        )}
      </div>
    </Container>
  )
}
