import React, { Component } from "react"
import Shania from "../../../images/profile.png"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

class About extends Component {
  render() {
    return (
      <section id="about" class="about">
        <Fade bottom>
          <h1>{this.props.title}</h1>
        </Fade>

        <div class="container">
          <div>
            <Fade bottom>
              <p>
                I am an undergraduate at{" "}
                <a href="https://lasalle.edu" class="lasalle">
                  La Salle University
                </a>
                , Philadelphia, majoring in and computer science and
                mathematics.
                <br /> <br />
                My career goals include becoming a software engineer and working
                for a product or tool I believe in while giving a positive
                impact on the world through my work and interactions with
                others.
                <br /> <br />
                On campus, I am the secretary and public relations for La
                Salle’s Mathematical Assoc. of America. I am also involved in La
                Salle’s Association for Computing Machinery and Programming
                Team.
                <br /> <br />
                My past involvement outside La Salle includes my role as the
                Creative Director of PERMIAS (Persatuan Mahasiswa Indonesia di
                Amerika Serikat) or the Indonesian Students' Association in
                America.
                <br /> <br />
                Aside from computer science, technology, and mathematics, I
                enjoy design, photography, and coffee.
              </p>
            </Fade>
            {/* <a href="#" class="btn">
              Read More
            </a> */}
          </div>
          <Fade bottom>
            <img src={Shania} alt="me" width="90%"></img>
          </Fade>
        </div>
        <div class="resume">
          <Fade bottom>
            <Link to="/resume">online resume </Link>
          </Fade>
        </div>
        {/* <a href={"/"} target="_blank" rel="noopener noreferrer" class="btn">
          {this.props.button}
        </a> */}
      </section>
    )
  }
}

export default About

{
  /* < section className = "section-a" >
    <div className="container">
      <Fade left>
      <h1>{this.props.title}</h1>
      </Fade>
      <div className="row">
      <div>
        <Fade right>
              <div className="col-md-7 col-sm-7">
              <div>
                <div className="div">
        <p>
          I am an undergraduate at La Salle University, Philadelphia,
          majoring in mathematics and computer science.
              <br /> <br />
          My career goals include becoming a software engineer and working
          for a product or tool I believe in while giving a positive impact
          on the world through my work and interactions with others.
              <br /> <br />
          Aside from mathematics, computer science, and technology, I enjoy
          photography, design, and coffee.
            </p>
        </div>
              </div>
              <div className="col-md-3 col-sm-5 shania">
              <div>
        <img src={Shania} alt="me"></img>
      </div>
      </Fade>
      </div>
      <a href={"mailto:" + this.props.email}>email</a>
    </div>
<div class="col-right pic col-sm-6 col-lg-5 hover shania center-block d-flex justify-content-center">
              <div class="square1"></div>
              <div class="square2">
                <figure>
                  <img src={Shania} width="100%"></img>
                </figure>
              </div>
            </div>
      </section > */
}
