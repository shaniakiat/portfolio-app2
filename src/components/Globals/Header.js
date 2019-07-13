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
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8">
              {/* <h4>{this.props.intro}</h4> */}
              <h1>{this.props.title}</h1>
              <p>
                I'm an undergraduate student at La Salle University, PA <br />
                majoring in mathematics and computer science.
              </p>
              <a href="#resume">{this.props.button}</a>
            </div>
            {/* <div>
              <a href="mailto:kiat.shania@gmail.com" className="email">
                kiat.shania@gmail.com
              </a>
            </div> */}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
