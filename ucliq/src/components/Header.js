import React from "react";
import image from "../images/rbbanner2.webp";
import "../style/home.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="headdiv">
        <div className="homeInfo">
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
        </div>
        <div className="homeImage">
          <img src={image} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
