import React, { useEffect } from "react"
import { navigate, PageRendererProps } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import RouteBase from "../components/route-base"
import RouteSecret from "../components/route-secret"
import RouteLogin from "../components/route-login"

const SecondPage: React.FC<PageRendererProps> = props => {
  const { location } = props

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("dashboard/login", { replace: true })
    }
  }, [location.pathname])

  return (
    <Layout>
      <SEO title="Page two" />
      <Profile></Profile>
      <Router>
        <RouteBase path="/dashboard/base"></RouteBase>
        <RouteSecret path="/dashboard/secret"></RouteSecret>
        <RouteLogin path="/dashboard/login"></RouteLogin>
      </Router>
    </Layout>
  )
}

export default SecondPage
