import React, { Component } from "react"
import Shania from "../../images/profile.png"
import { Link } from "gatsby"

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div class="col-left col-sm-6 col-lg-7">
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
                {/* Please feel free to contact me at&nbsp;
                <a href="mailto:kiat.shania@gmail.com" className="email">
                  kiat.shania@gmail.com
                </a> */}
              </p>
              {/* <a href={"mailto:" + this.props.email}>email</a> */}
            </div>
            {/* <div class="col-right pic col-sm-6 col-lg-5 hover shania center-block d-flex justify-content-center">
              <div class="square1"></div>
              <div class="square2">
                <figure>
                  <img src={Shania} width="100%"></img>
                </figure>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    )
  }
}

export default About
