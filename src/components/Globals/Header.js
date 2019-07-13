import React, { Component } from "react"

const myStyles = {
  backgroundColor: "#17262b",
  height: "100vh",
  backgroundSize: "cover",
  color: "#4bb0a9",
}

class Header extends Component {
  render() {
    return (
      <header className="header" id="home" style={myStyles}>
        {/* <h4>{this.props.intro}</h4> */}
        <h1>{this.props.title}</h1>
        <h3>
          I'm an undergraduate student at La Salle University, PA <br />
          majoring in mathematics and computer science.
        </h3>
        {/* <a href="#resume">{this.props.button}</a> */}
        <a>{this.props.button}</a>
      </header>
    )
  }
}

export default Header
