/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "../components/Styles/layout.css"

import "../components/Styles/navbar.css"
import "../components/Styles/home.css"
import "../components/Styles/about.css"
import "../components/Styles/project.css"
import "../components/Styles/contact.css"
import "../components/Styles/footer.css"

import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div id="page-container">
          <div id="content-wrap">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
