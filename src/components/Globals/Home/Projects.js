import React, { Component } from "react"
// import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import ProjectsHooks from "./ProjectsHooks"

class Project extends Component {
  render() {
    return (
      <section id="project" class="project">
        <div className="container">
          <Fade bottom>
            <h1>{this.props.title}</h1>
            <ProjectsHooks />
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
