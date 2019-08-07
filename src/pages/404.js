import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/Styles/error.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 class="error" align="center">
      PAGE NOT FOUND
    </h1>
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </Layout>
)

export default NotFoundPage
