import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-nav.svg"
import { FaAlignRight } from "react-icons/fa"
import Fade from "react-reveal/Fade"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        class: 1,
        path: "/#home",
        text: "home",
      },
      {
        class: 2,
        path: "/#about",
        text: "about",
      },
      {
        class: 3,
        path: "/#project",
        text: "project",
      },
      {
        class: 4,
        path: "/#contact",
        text: "contact",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <Fade top>
        <nav className="stroke navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/#home" className="navbar-brand">
            <img src={logo} alt="logo" height="40" width="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <FaAlignRight> </FaAlignRight>
          </button>
          <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.class} className="nav-item">
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </Fade>
    )
  }
}
