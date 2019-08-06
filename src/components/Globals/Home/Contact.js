import React, { Component } from "react"
// import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class Contact extends Component {
  render() {
    return (
      <section id="contact" class="contact">
        <div className="container">
          <Fade bottom>
            <h1>{this.props.title}</h1>
          </Fade>
          <Fade bottom>
            <p>
              <br></br>
              Please feel free to contact me at&nbsp;
              <a href="mailto:kiat.shania@gmail.com" className="email">
                kiat.shania@gmail.com
              </a>
            </p>
          </Fade>
        </div>
      </section>
    )
  }
}

export default Contact
