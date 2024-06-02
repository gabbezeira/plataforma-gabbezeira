import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'
import { DownloadPage } from './pages/DownloadPage'
import { Admin } from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'downloads',
        element: <DownloadPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
