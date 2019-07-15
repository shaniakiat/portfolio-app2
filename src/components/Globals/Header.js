import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="container">
          <div className="row">
            <div class="col-xs-10 col-sm-10 col-lg-10">
              {/* <h4>{this.props.intro}</h4> */}
              <h1>{this.props.title}</h1>
              <p>
                I'm an undergraduate student at La Salle University, PA <br />
                majoring in mathematics and computer science.
              </p>
              <a href="mailto:kiat.shania@gmail.com">{this.props.button}</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
