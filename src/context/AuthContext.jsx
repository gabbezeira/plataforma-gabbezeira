import { createContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { api } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageUser && storageToken) {
        try {
          setUser(JSON.parse(storageUser)) // Parse the stored user data
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
    try {
      const response = await api.post('/login', { email, password })
      if (response.data.error) {
        alert(response.data.error)
      } else {
        const { token } = response.data
        api.defaults.headers.common.Authorization = `Bearer ${token}`

        // Se você não precisar buscar dados do usuário, remova esta parte
        setUser({ email }) // Defina um valor fictício ou real de acordo com a resposta da API

        localStorage.setItem('@Auth:user', JSON.stringify({ email }))
        localStorage.setItem('@Auth:token', token)
      }
    } catch (error) {
      console.log('SignIn error:', error)
    }
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    api.defaults.headers.common.Authorization = ''
    return <Navigate to="/" />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
