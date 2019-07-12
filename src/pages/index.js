import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/globals/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      class="header"
      intro="Hello, my name is"
      title="Shania Kiat."
      button="Resume"
    />
  </Layout>
)

export default IndexPage
