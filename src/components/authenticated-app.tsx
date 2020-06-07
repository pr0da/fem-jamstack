import React from "react"
import { Router, Redirect } from "@reach/router"

import RouteBase from "../components/route-base"
import RouteSecret from "../components/route-secret"
import Profile from "./profile"

const AuthenticatedApp = () => {
  return (
    <>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <Redirect default from="*" to="/dashboard/base" replace noThrow />
      </Router>
    </>
  )
}

export default AuthenticatedApp
