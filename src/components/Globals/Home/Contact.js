import React, { Component } from "react"
// import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <Fade left>
                <h1>{this.props.title}</h1>
              </Fade>
              <Fade right>
                <p>
                  <br></br>
                  Please feel free to contact me at&nbsp;
                  <a href="mailto:kiat.shania@gmail.com" className="email">
                    kiat.shania@gmail.com
                  </a>
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
