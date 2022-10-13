import React from "react";
import "../style/regseller1.css";

const RegSeller = () => {
  return (
    <div className="container">
        <h1 className="header5">How to register as a Seller?</h1>
      <div className="flex-container1">
        <div className="divcol21" data-aos="zoom-in">
          <h5>
            Download Ucliq <br /> Seller App
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucliq_seller_panel"
            target="_blank"
            rel="noreferrer"
            
          >
            <i
              className="fa fa-android"
              aria-hidden="true"
              style={{ fontSize: "48px" }}
            ></i>
          </a>
        </div>
        <div className="divcol31" data-aos="zoom-in">
          <i className="fa fa-mobile" style={{ fontSize: "48px" }}></i>
          <h5>Verify mobile number</h5>
        </div>
        <div className="divcol41" data-aos="zoom-in">
          <h5>Complete KYC</h5>
          <i className="fa fa-home" style={{ fontSize: "48px" }}></i>
        </div>
      </div>
    </div>
  );
};
export default RegSeller;

