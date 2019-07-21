import React, { Component } from "react"
import Shania from "../../../images/profile.png"
// import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class About extends Component {
  render() {
    return (
      <section id="about" className="py-5">
        <div className="container">
          <Fade left>
            <h1>{this.props.title}</h1>
          </Fade>
          <div className="row">
            <Fade right>
              <div className="col-md-7 col-sm-7">
                <div className="div">
                  <p>
                    I am an undergraduate at La Salle University, Philadelphia,
                    majoring in mathematics and computer science.
                    <br /> <br />
                    My career goals include becoming a software engineer and
                    working for a product or tool I believe in while giving a
                    positive impact on the world through my work and
                    interactions with others.
                    <br /> <br />
                    Aside from mathematics, computer science, and technology, I
                    enjoy photography, design, and coffee.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 shania">
                <img src={Shania} alt="me"></img>
              </div>
            </Fade>
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
