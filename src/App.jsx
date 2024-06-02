import { Menu, Banner, Footer } from './components'
import { Body } from './styles/styles'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </>
  )
}
