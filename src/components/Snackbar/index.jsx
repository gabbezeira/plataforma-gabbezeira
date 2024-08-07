import React, { useEffect, useState } from 'react'
import { CircleCheck, CircleX, CircleAlert } from 'lucide-react'
import { SnackbarContainer, ProgressBar, Icon } from './styles'

const NotificationIcons = ({ type, $color }) => {
  switch (type) {
    case 'success':
      return <Icon as={CircleCheck} color={$color} />
    case 'error':
      return <Icon as={CircleX} color={$color} />
    case 'info':
    default:
      return <Icon as={CircleAlert} color={$color} />
  }
}

const getProgressBarColor = (type) => {
  switch (type) {
    case 'success':
      return '#36D073'
    case 'error':
      return '#CA3737'
    case 'info':
      return '#D89E08'
  }
}

export const Snackbar = ({
  message,
  $visible,
  onClose,
  type,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState(100)
  const color = getProgressBarColor(type)

  useEffect(() => {
    if ($visible) {
      setProgress(100)
      const interval = setInterval(() => {
        setProgress((prev) => prev - 1)
      }, duration / 100)

      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }
  }, [$visible, onClose, duration])

  return (
    <SnackbarContainer $visible={$visible}>
      <NotificationIcons type={type} $color={color} />
      {message}
      <ProgressBar $progress={progress} $color={color} />
    </SnackbarContainer>
  )
}
