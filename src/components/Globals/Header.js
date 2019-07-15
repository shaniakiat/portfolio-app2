import React, { Component } from "react"
// import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="container">
          <div className="row">
            <div class="col-xs-10 col-sm-10 col-lg-10">
              {/* <h4>{this.props.intro}</h4> */}
              <Fade left>
                <h1>{this.props.title}</h1>
              </Fade>
              <Fade right>
                <p>
                  I'm an undergraduate student at La Salle University, PA <br />
                  majoring in mathematics and computer science.
                </p>
              </Fade>
              <Fade left>
                <a href="mailto:kiat.shania@gmail.com">{this.props.button}</a>
              </Fade>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
