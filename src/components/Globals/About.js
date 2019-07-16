import React, { Component } from "react"
import Shania from "../../images/profile.png"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container inner-width">
          <Fade left>
            <h1>{this.props.title}</h1>
          </Fade>
          <div className="border">
            <div className="about-row">
              <Fade right>
                <div className="about-col">
                  <div className="about-div">
                    <p>
                      I am an undergraduate at La Salle University,
                      Philadelphia, majoring in mathematics and computer
                      science.
                      <br /> <br />
                      My career goals include becoming a software engineer and
                      working for a product or tool I believe in while giving a
                      positive impact on the world through my work and
                      interactions with others.
                      <br /> <br />
                      Aside from mathematics, computer science, and technology,
                      I enjoy photography, design, and coffee.
                    </p>
                  </div>
                </div>
                <div className="about-col shania">
                  <img src={Shania} width="80%"></img>
                </div>
              </Fade>
            </div>
          </div>
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
      </section>
    )
  }
}

export default About
