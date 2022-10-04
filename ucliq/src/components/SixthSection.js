import React from "react";
import "../style/secondsection.css";
import image3 from "../images/kyc1.jpg";
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
                    src="https://res.cloudinary.com/antrix/image/upload/v1664818678/download_gif_cnuwyj.gif"
                    alt=""
                    style={{
                      width: "20rem",
                      padding: "0px",
                      margin: "48px 50px 9px -1px",
                      height: "20rem",
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
                    src="https://res.cloudinary.com/antrix/image/upload/v1664817925/WhatsApp_Image_2022-10-03_at_22.55.07_bwuo2k.jpg"
                    alt=""
                    style={{
                      width: "21rem",
                      padding: "0px",
                      margin: "49px 3px 9px 85px",
                      height: "20rem",
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
                    src={image3}
                    alt=""
                    style={{
                      width: "30rem",
                      padding: "0px",
                      margin: "49px -104px 9px 69px",
                      height: "20rem",
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
