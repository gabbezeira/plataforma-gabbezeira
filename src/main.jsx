import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
import { Error } from './routes/Error'
import { DownloadPage } from './routes/DownloadPage'
import { Admin } from './routes/Admin'

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
