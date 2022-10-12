import React from "react";
import image from "../images/frontimage.webp";
import { useNavigate } from "react-router-dom";
import "../style/home.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <div className="col-sm-6 headerInfo" data-aos="fade-right">
            <h1 className="headerfirsth1">
              Digital Mandi of <span>Meat, Fresh Fish, and Seafood.</span>
            </h1>
            <div className="headerP">
            <p>
              UcliQ is a B2B Marketplace for Retail, Restaurants, Hotels and
              Businesess. Providing the best services with the help of
              technology and the supply chain innovation.
            </p>
            </div>
            <div className="span">
              <span onClick={() => navigate("/about")}>About Us</span>
            </div> 
          </div>
          <div className="col-sm-6 headerImage" data-aos="fade-left">
            <img src={image} alt="careerimage" className="headerImage1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

