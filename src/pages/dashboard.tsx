import React from "react"
import { PageRendererProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/app"

const SecondPage: React.FC<PageRendererProps> = props => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <App />
    </Layout>
  )
}

export default SecondPage
