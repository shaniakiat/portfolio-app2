import React, { Component } from "react"
// import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
// import styled from "styled-components"
import Resume from "../../../../static/resume.pdf"

class Header extends Component {
  render() {
    return (
      <header id="home" class="home">
        <div className="container">
          {/* <h4>{this.props.intro}</h4> */}
          <Fade bottom>
            <h1>{this.props.title}</h1>
          </Fade>
          <Fade bottom>
            <p>
              I'm an undergraduate student at La Salle University, PA <br />
              majoring in computer science and mathematics.
            </p>
          </Fade>
          <Fade bottom>
            {/* <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              class="btn"
            >
              {this.props.button}
            </a> */}
            <a href="https://www.linkedin.com/in/shania-kiat" target="_blank">
              <FaLinkedin className="linkedin-icon social" size={70} />
            </a>
            <a href="https://github.com/shaniakiat" target="_blank">
              <FaGithub className="github-icon social" />
            </a>
          </Fade>
        </div>
      </header>
    )
  }
}

export default Header
