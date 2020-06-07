import React, { useState } from "react"
import { useIdentityContext, User } from "react-netlify-identity"
import { IdentityModal } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

interface AuthContextValue {
  data: User | undefined
  login: () => void
  logout: () => void
}

const AuthContext = React.createContext<Partial<AuthContextValue>>({})

const AuthProvider: React.FC = props => {
  const { children } = props
  const [isVisible, setVisible] = useState(false)
  const identity = useIdentityContext()

  const login = () => {
    setVisible(true)
  }
  const logout = () => {
    setVisible(true)
  }
  return (
    <>
      <AuthContext.Provider value={{ data: identity?.user, login, logout }}>
        {children}
      </AuthContext.Provider>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisible(false)}
      />
    </>
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
