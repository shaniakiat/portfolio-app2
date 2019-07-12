import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/globals/header"
import About from "../components/globals/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header id="home" class="header" title="Shania Kiat." button="Resume" />
    <About id="about" class="about" title="About Me" />
  </Layout>
)

export default IndexPage
