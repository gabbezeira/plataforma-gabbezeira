import React, { createContext, useState } from 'react'
import { Snackbar } from '../components/Snackbar'

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
	const [snackbar, setSnackbar] = useState({
		message: '',
		show: false,
		type: 'info',
		duration: 4000,
	})

	const defaultDuration = 4000

	const showSnackbar = (message, type = 'info', duration = defaultDuration) => {
		setSnackbar({ message, show: true, type, duration })
		setTimeout(() => {
			setSnackbar((prev) => ({ ...prev, show: false }))
		}, duration)
	}

	const onSnackbarClose = () => {
		setSnackbar((prev) => ({ ...prev, show: false }))
	}

	return (
		<NotificationContext.Provider value={{ showSnackbar, snackbar }}>
			{children}
			<Snackbar
				message={snackbar.message}
				$visible={snackbar.show}
				type={snackbar.type}
				onClose={onSnackbarClose}
				duration={snackbar.duration}
			/>
		</NotificationContext.Provider>
	)
}
