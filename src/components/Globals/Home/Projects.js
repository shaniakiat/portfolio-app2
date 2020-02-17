import React, { Component } from "react"
// import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class Project extends Component {
  render() {
    return (
      <section id="project" class="project">
        <div className="container">
          <Fade bottom>
            <h1>{this.props.title}</h1>
            <div className="grid-container">
              <div className="grid-item">1</div>
              <div className="grid-item">2</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
              <div className="grid-item">5</div>
              <div className="grid-item">6</div>
              <div className="grid-item">7</div>
              <div className="grid-item">8</div>
              <div className="grid-item">9</div>
            </div>
          </Fade>
          <Fade bottom>
            <p></p>
          </Fade>
        </div>
      </section>
    )
  }
}

export default Project
