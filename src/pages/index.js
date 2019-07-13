import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
// import About from "../components/Globals/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header id="home" class="header" title="Shania Kiat." button="Resume" />
    {/* <About id="about" class="about" title="About Me" /> */}
  </Layout>
)

export default IndexPage
