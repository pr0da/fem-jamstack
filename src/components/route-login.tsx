import React from "react"
import { useAuth } from "../context/auth-context"
import { RouteComponentProps } from "@reach/router"

const RouteLogin: React.FC<RouteComponentProps> = props => {
  const { login } = useAuth()

  return (
    <>
      <h1>Login or signup</h1>
      <button onClick={login}>Log In</button>
    </>
  )
}

export default RouteLogin
