import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaDribbbleSquare } from "react-icons/fa"
import { FaBehanceSquare } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import Zoom from "react-reveal/Zoom"

export default function Footer() {
  return (
    <Zoom>
      <footer className="footer">
        <div className="container">
          <div class="text-center center-block">
            <a href="https://www.linkedin.com/in/shania-kiat" target="_blank">
              <FaLinkedin className="linkedin-icon social" />
            </a>
            <a href="https://github.com/shaniakiat" target="_blank">
              <FaGithub className="github-icon social" />
            </a>
            <a href="https://dribbble.com/shaniakiat" target="_blank">
              <FaDribbbleSquare className="dribbble-icon social" />
            </a>
            <a href="https://www.behance.net/kshania987f1f" target="_blank">
              <FaBehanceSquare className="behance-icon social" />
            </a>
            <a href="https://codepen.io/shaniakiat/" target="_blank">
              <FaCodepen className="codepen-icon social" />
            </a>
            <a
              href="https://www.instagram.com/shania.took.this/"
              target="_blank"
            >
              <FaInstagram className="insta-icon social" />
            </a>
          </div>
          <div className="text-center text-capitalize">
            <h3 className="copyright">
              &copy; {new Date().getFullYear()} Shania Kiat
            </h3>
          </div>
        </div>
      </footer>
    </Zoom>
  )
}
