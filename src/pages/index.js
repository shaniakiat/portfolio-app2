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
    <Header id="home" class="header" title="Shania Kiat." button="Resume" />
    <About id="about" class="about" title="About Me" />
    <Project id="project" class="project" title="My Projects" />
    <Contact id="contact" class="contact" title="Get In Touch" />
  </Layout>
)

export default IndexPage
