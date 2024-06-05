import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import App from './App'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'
import { DownloadPage } from './pages/DownloadPage'
import { LoginPage } from './pages/LoginPage'
import { Admin } from './pages/Admin'
import { PrivateRoute } from './routes/privateRoutes'
import { DownloadDetails } from './components'

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
        path: 'downloads/:id',
        element: <DownloadDetails />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'painel',
        element: (
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
