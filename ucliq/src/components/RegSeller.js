import React from "react";
import kyc from "../images/kyc.jpg";
import signup from "../images/signup.jpg";
import download from "../images/download.jpg";
import "../style/regseller.css";

const RegSeller = () => {
  return (
    <div>
      <div className="container sixthMain">
        <div className="fifthmain">
          <div className="regseller">
            <h1
              className="regbuyerheading"
              data-aos="fade-down-right"
              style={{ textAlign: "center", marginLeft: "-10rem" }}
            >
              How to register as a Seller?
            </h1>
            <div className="col-md-4 registerbuyer" data-aos="flip-up">
              <div className="registerInfo">
                <div className="pic1">
                  <img
                    src={download}
                    alt=""
                    className="pic-one"
                    // style={{
                    //   width: "320px",
                    //   padding:"0px",
                    //   margin: "48px 50px 9px -50px",
                    //   height: "450px",
                    //   lineHeight: "40px",
                    //   boxShadow: "0px 6px 11px -2px rgb(0 0 0 / 75%)",
                    // }}
                  />
                </div>
                <div className="link4">
                  <span>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ucliq_customer&gl=US"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download the App
                    </a>
                  </span>
                </div>
              </div>
              <div className="registerInfo">
                <div className="pic2">
                  <img src={signup} alt="" className="pic-two" />
                </div>
                <div className="link5">
                  <span>
                    <a
                      href="https://www.ucliq.in/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Signup
                    </a>
                  </span>
                </div>
              </div>
              <div className="registerInfo">
                <div className="pic3">
                  <img src={kyc} alt="" className="pic-two" />
                </div>
                <div className="link6">
                  <span>
                    <a
                      href="https://www.ucliq.in/kyc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Start KYC
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSeller;
