import React from "react"
import { useAuth } from "./auth-context"

interface UserContextValue {
  full_name: string
}

const UserContext = React.createContext<Partial<UserContextValue>>({})

const UserProvider: React.FC = props => {
  const { children } = props
  const value = useAuth()?.data?.user_metadata
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => React.useContext(UserContext)

export { UserProvider, useUser }
