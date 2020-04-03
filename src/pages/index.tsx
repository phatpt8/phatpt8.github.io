import React from "react"

import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Portfolio />
  </Layout>
)

export default IndexPage
