import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-nav.svg"
import { TiThMenu } from "react-icons/ti"

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
        path: "/#project",
        text: "project",
      },
      {
        id: 4,
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
          <img src={logo} alt="logo" height="40" width="40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <TiThMenu></TiThMenu>
          {/* <img src={TiThMenu} className="App-logo" alt="logo" /> */}
          {/* <span className="navbar-toggler-icon" /> */}
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
