import React from "react";
import "../style/secondsection.css";
import kyc from "../images/kyc.jpg";
import signup from '../images/signup.jpg';
import download from '../images/download.jpg'
const SixthSection = () => {
  return (
    <>
      <div className="container sixthMain">
        <div className="fifthmain">
          <div className="sixth-two">
            <h1 className="fifthheading">How to register as a Buyer?</h1>
            <div className="col-md-4 registerbuyer">
              <div className="registerInfo">
                <div className="pic1">
                  <img
                    src={download}
                    alt=""
                    style={{
                      width: "300px",
                      padding: "0px",
                      margin: "48px 50px 9px 20px",
                      height: "450px",
                      lineHeight: "40px",
                      boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)"
                    }}
                  />
                </div>
                <div className="link1">
                  <span >
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
                  <img
                    src={signup}
                    alt=""
                    style={{
                      width: "300px",
                      padding: "0px",
                      margin: "49px 50px 9px 100px",
                      height: "450px",
                      lineHeight: "40px",
                      boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)"
                    }}
                  />
                </div>
                <div className="link2">
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
                  <img
                    src={kyc}
                    alt=""
                    style={{
                      width: "300px",
                      padding: "0px",
                      margin: "49px 40px 9px 100px",
                      height: "450px",
                      lineHeight: "40px",
                      boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)"
                    }}
                  />
                </div>
                <div className="link3">
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
    </>
  );
};
export default SixthSection;
