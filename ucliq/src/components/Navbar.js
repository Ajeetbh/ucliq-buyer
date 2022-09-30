import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import logo from '../images/logo.webp'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={logo} alt="logo" className="logo"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/" class="nav-link">
                Home
              </Link>

              <Link to="/#Service-section" class="nav-link">
                Services
              </Link>
              <Link to="/career" class="nav-link">
                Career
              </Link>
              <Link to="/about" class="nav-link">
                About Us
              </Link>
              <Link to="/contact" class="nav-link">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;