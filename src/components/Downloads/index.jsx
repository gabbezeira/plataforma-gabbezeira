import React from 'react'
import { Container } from './styles'
import DownloadsItems from '../../mocks/downloads-items.json'

import { Items } from './Items'
import { Search } from 'lucide-react'
import { NotFound } from '../'

export function Downloads() {
  const [search, setSearch] = React.useState('')

  const downloads = DownloadsItems.filter((downloads) =>
    downloads.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
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
          {downloads.length > 0 ? (
            downloads
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((item) => (
                <div key={item.id}>
                  <Items
                    downloadId={item.id}
                    downloadImage={item.image}
                    downloadTitle={item.title}
                    downloadLink={item.link}
                    showDownloadDetails={false}
                    showConfetti={false}
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
    </Container>
  )
}
