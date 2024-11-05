import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'

import App from './App'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'
import { DownloadPage } from './pages/DownloadPage'
import { LoginPage } from './pages/LoginPage'
import { PrivateRoute } from './routes/privateRoutes'
import { DownloadDetailsPage } from './pages/DownloadDetails'

import { RegisterPainel } from './pages/RegisterHub'
import { RegistedPainel } from './pages/RegisteredHub'
import { PainelPage } from './pages/Painel'

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
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register-hub',
				element: (
					<PrivateRoute>
						<RegisterPainel />
					</PrivateRoute>
				),
			},
			{
				path: 'registered-hub',
				element: (
					<PrivateRoute>
						<RegistedPainel />
					</PrivateRoute>
				),
			},
			{
				path: 'painel',
				element: (
					<PrivateRoute>
						<PainelPage />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: 'downloads/:slug',
		element: <DownloadDetailsPage />,
		errorElement: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationProvider>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</NotificationProvider>
	</React.StrictMode>,
)
