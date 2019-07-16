import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
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
