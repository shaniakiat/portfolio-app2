import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Home/Header"
import About from "../components/Globals/Home/About"
import Contact from "../components/Globals/Home/Contact"
import Project from "../components/Globals/Home/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Shania Kiat" />
    <Header class="header" title="Shania Kiat." button="Resume" />
    <About class="about" title="About Me" />
    <Project class="project" title="My Projects" />
    <Contact class="contact" title="Get In Touch" />
  </Layout>
)

export default IndexPage
