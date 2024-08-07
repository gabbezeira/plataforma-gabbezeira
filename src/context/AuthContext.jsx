import React, { createContext, useState, useEffect, useContext } from 'react'
import { api } from '../services/api'
import { NotificationContext } from './NotificationContext'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState('')
  const { showSnackbar } = useContext(NotificationContext)

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageUser && storageToken) {
        try {
          setUser(JSON.parse(storageUser))
          api.defaults.headers.common.Authorization = `Bearer ${storageToken}`
        } catch (error) {
          console.error('Error parsing user data:', error.message)
          localStorage.removeItem('@Auth:user')
          localStorage.removeItem('@Auth:token')
        }
      }
    }
    loadingStoreData()
  }, [])

  const signIn = async ({ email, password }) => {
    setLoading(true)
    try {
      const response = await api.post('/login', { email, password })
      if (response.data.error) {
        showSnackbar(response.data.error, 'error')
      } else {
        const { token } = response.data
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setUser({ email })
        localStorage.setItem('@Auth:user', JSON.stringify({ email }))
        localStorage.setItem('@Auth:token', token)
        setRedirect('/register-hub')
      }
    } catch {
      showSnackbar('Senha ou Email inválido.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const logOut = () => {
    localStorage.clear()
    setUser(null)
    api.defaults.headers.common.Authorization = ''
    setRedirect('/')
  }

  useEffect(() => {
    if (redirect) {
      window.location.href = redirect
      setRedirect('')
    }
  }, [redirect])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logOut,
        signed: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
