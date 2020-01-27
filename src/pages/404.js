import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/Styles/error.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="error" align="center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/#home" className="homeButton">
        Go Home
      </Link>
    </div>
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </Layout>
)

export default NotFoundPage
