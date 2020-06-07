import React from "react"
import { RouteComponentProps, Redirect } from "@reach/router"
import { useIdentityContext } from "react-netlify-identity"

interface Props extends RouteComponentProps {
  onLoginRequest: () => void
}

const RouteLogin: React.FC<Props> = props => {
  const { onLoginRequest } = props
  const identity = useIdentityContext()

  if (identity?.isLoggedIn) {
    return <Redirect to="/dashboard/secret" replace />
  }

  return (
    <>
      <h1>Login or signup</h1>
      <button onClick={onLoginRequest}>Log In</button>
    </>
  )
}

export default RouteLogin
