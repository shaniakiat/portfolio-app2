import React, { Component } from "react"
import { Link } from "gatsby"

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8">
              <h1>{this.props.title}</h1>
              <p>
                I am an undergraduate at La Salle University, Philadelphia,
                majoring in mathematics and computer science.
                <br /> <br />
                My career goals include becoming a software engineer and working
                for a product or tool I believe in while giving a positive
                impact on the world through my work and interactions with
                others.
                <br /> <br />
                Aside from mathematics, computer science, and technology, I
                enjoy photography, design, and coffee.
                <br /> <br />
                Please feel free to contact me at
                <a href="mailto:kiat.shania@gmail.com" className="email">
                  kiat.shania@gmail.com
                </a>
              </p>
              {/* <a href={"mailto:" + this.props.email}>email</a> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
