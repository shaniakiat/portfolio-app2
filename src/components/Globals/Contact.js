import React, { Component } from "react"
import { Link } from "gatsby"

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div class="col-left col-xs-10 col-sm-10 col-lg-10">
              <h1>{this.props.title}</h1>
              <p>
                Please feel free to contact me at&nbsp;
                <a href="mailto:kiat.shania@gmail.com" className="email">
                  kiat.shania@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
