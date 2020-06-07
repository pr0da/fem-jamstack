import React from "react"
import { Router, Redirect } from "@reach/router"

import RouteLogin from "../components/route-login"

const UnauthenticatedApp = () => {
  return (
    <Router>
      <RouteLogin path="/dashboard/login" />
      <Redirect default from="*" to="/dashboard/login" replace noThrow />
    </Router>
  )
}

export default UnauthenticatedApp
