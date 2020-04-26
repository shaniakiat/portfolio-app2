import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Home/Header"
import About from "../components/Globals/Home/About"
import Contact from "../components/Globals/Home/Contact"
import Project from "../components/Globals/Home/Projects"

import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Shania Kiat" />
    <Navbar />
    <Header id="home" class="header" title="Shania Kiat" button="Resume" />
    <About id="about" class="about" title="About Me" />
    <Project id="project" class="project" title="My Projects" />
    <Contact id="contact" class="contact" title="Get In Touch" />
    <Footer />
  </Layout>
)

export default IndexPage
