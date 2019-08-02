import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div class="text-center center-block">
          <a href="https://www.linkedin.com/in/shania-kiat" target="_blank">
            <FaLinkedin className="linkedin-icon social" />
          </a>
          <a href="https://github.com/shaniakiat" target="_blank">
            <FaGithub className="github-icon social" />
          </a>
          <a href="https://www.instagram.com/shania.took.this/" target="_blank">
            <FaInstagram className="insta-icon social" />
          </a>
        </div>
        <div className="row">
          <div className="col-sm-12 mx-auto cold-md-12 text-center text-capitalize">
            <h3 className="copyright">
              Designed & Developed by Shania Kiat&nbsp;
              {new Date().getFullYear()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
