import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-12">
          <h3 style={{ color: "white", fontWeight: "bold" }}>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="">Careers</Link>
          <Link to="">Our Story</Link>
          <hr style={{ color: "white", fontWeight: "bold" }} />
          <span style={{ color: "white", padding: "2px" }}>
            <Link to="">Terms of Use</Link> and{" "}
            <Link to="">Privacy Policy</Link>
          </span>
          <p>©2022 by Ucliq Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
