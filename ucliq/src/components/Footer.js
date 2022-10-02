import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="conainer">
        <div className="row">
          <div className="col-md-4 footer">
            <div className="company">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/buy-sell">Buy/Sell</Link>
              <Link to="/career">Career</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="resource">
              <h4>Resource</h4>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Media</li>
              <li>Reach Us</li>
            </div>
            <div className="connect-with">
              <h4>Connect with us</h4>
              <div className="icon">
                <i
                  class="fa fa-facebook-f"
                  style={{ fontSize: "30px", color: "rgb(89, 207, 89)" }}
                ></i>
                <i
                  class="fa fa-linkedin"
                  style={{
                    fontSize: "30px",
                    marging: "0px 0px 0px 1px",
                    color: "rgb(89, 207, 89)",
                  }}
                ></i>
                <i
                  class="fa fa-instagram"
                  style={{ fontSize: "30px", color: "rgb(89, 207, 89)" }}
                ></i>
                <i
                  class="fa fa-twitter"
                  style={{ fontSize: "30px", color: "rgb(89, 207, 89)" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Privacy Policy | Terms of Use | Refund Policy | © 2022 Ucliq
              Private Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
