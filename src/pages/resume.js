import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Globals/Home/Resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Shania Kiat" />
    <Resume />
  </Layout>
)

export default IndexPage
