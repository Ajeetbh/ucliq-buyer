import React from "react";
import image from "../images/rbbanner2.webp";
import "../style/home.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="headdiv">
        {/* <div className="homeInfo">
          <h1>
            Discover, connect and transact with top quality food suppliers in
            your area.
          </h1>
          <br />
          <p>
            Introducing Redbasil's digital marketplace for restaurants and
            hotels. Get started now by downloading the marketplace app.
          </p>
          <br />
          <div className="buttondiv">
            <button className="btn btn-danger">Download Android App</button>
            <button className="btn btn-danger">Download iPhone App</button>
          </div>
        </div> */}
        <div className="homeImage">
          <div className="btn btn-danger headBtn">
            <Link to="/about" class="nav-link-head">
              About Us
            </Link>
          </div>
          <div className="btn btn-danger headBtn1"></div>

          <img
            src="https://res.cloudinary.com/antrix/image/upload/v1664705659/WhatsApp_Image_2022-10-02_at_15.41.33_lcxldl.jpg"
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
