import React from "react"
import { IdentityContextProvider } from "react-netlify-identity"
import { AuthProvider } from "./auth-context"
import { UserProvider } from "./user-context"

const AppProviders: React.FC = ({ children }) => {
  return (
    <IdentityContextProvider url="https://jamstack-pr0da.netlify.app">
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </IdentityContextProvider>
  )
}

export default AppProviders
