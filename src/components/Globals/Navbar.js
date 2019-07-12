import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/#home",
        text: "home",
      },
      {
        id: 2,
        path: "/#about",
        text: "about",
      },
      {
        id: 3,
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
      <nav className="stroke navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/#home" className="navbar-brand">
          <img src={logo} alt="logo" height="30" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
