import React from "react";
import "../style/sixsection.css";

const SixthSection = () => {
  return (
    <div className="container">
      <h1 className="header4">
        How to register as a Buyer?
      </h1>
      <div className="flex-container">
        <div className="divcol2" data-aos="zoom-in">
          <h5>
            Download Ucliq <br /> Buyer App
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucliq_customer&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-android"
              aria-hidden="true"
              style={{ fontSize: "48px", color: "black" }}
            ></i>
          </a>
        </div>
        <div className="divcol3" data-aos="zoom-in">
          <i
            className="fa fa-mobile"
            style={{ fontSize: "48px", color: "#f3da35" }}
          ></i>
          <h5 style={{ margin: "-10px 1px" }}>Verify mobile number</h5>
        </div>
        <div className="divcol4" data-aos="zoom-in">
          <h5>Complete KYC</h5>
          <i className="fa fa-home" style={{ fontSize: "48px" }}></i>
        </div>
      </div>
    </div>
  );
};
export default SixthSection;

