import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Header from "../components/globals/header.js"
import About from "../components/globals/about.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header id="home" class="header" title="Shania Kiat." button="Resume" />
    <About id="about" class="about" title="About Me" />
  </Layout>
)

export default IndexPage
