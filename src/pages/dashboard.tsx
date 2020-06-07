import React, { useEffect, useState } from "react"
import { navigate, PageRendererProps } from "gatsby"
import { Router } from "@reach/router"
import { IdentityModal } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import RouteBase from "../components/route-base"
import RouteSecret from "../components/route-secret"
import RouteLogin from "../components/route-login"

const SecondPage: React.FC<PageRendererProps> = props => {
  const { location } = props
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [location.pathname])

  return (
    <Layout>
      <SEO title="Page two" />
      <Profile onLogout={() => setVisible(true)}></Profile>
      <Router>
        <RouteBase path="/dashboard/base"></RouteBase>
        <RouteSecret path="/dashboard/secret"></RouteSecret>
        <RouteLogin
          path="/dashboard/login"
          onLoginRequest={() => setVisible(true)}
        ></RouteLogin>
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisible(false)}
      ></IdentityModal>
    </Layout>
  )
}

export default SecondPage
