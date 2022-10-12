import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../style/navbar.css";
//import logo from "../images/logo6.jpg";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid navbar">
          <Link to="/" class="nav-link1">
            <img
              src="https://res.cloudinary.com/antrix/image/upload/v1664960446/20221005_142807_0000_rvu7dq.png"
              alt="logo"
              className="logo"
            />
          </Link>

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
            <ul class="navbar-nav mb-2 mb-lg-0">
              <Link to="/" class="nav-link">
                Home
              </Link>

              <HashLink to="/service" class="nav-link" smooth>
                Services
              </HashLink>
              <Link to="/buy-sell" class="nav-link">
                Buy/Sell
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



// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </>
//   )
// }

// export default Navbar
