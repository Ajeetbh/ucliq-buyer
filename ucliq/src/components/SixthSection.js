import React from "react";
import "../style/secondsection.css";
import image3 from "../images/kyc1.jpg";
import image4 from "../images/download1.jpg";

const SixthSection = () => {
  return (
    <>
      <div className="container sixthMain">
        <div className="fifthmain">
          <div className="sixth-two">
            <h1 className="fifthheading">How to register as a Buyer?</h1>
            <div className="registerbuyer">
              <img
                src="https://res.cloudinary.com/antrix/image/upload/v1664818678/download_gif_cnuwyj.gif"
                alt=""
                style={{
                  width: "30rem",
                  padding: "0px",
                  margin: "48px -21px 25px -1px",
                  height: "22rem",
                }}
              />
              <img
                src="https://res.cloudinary.com/antrix/image/upload/v1664817925/WhatsApp_Image_2022-10-03_at_22.55.07_bwuo2k.jpg"
                alt=""
                style={{
                  width: "21rem",
                  padding: "0px",
                  margin: "49px 3px 25px 85px",
                  height: "22rem",
                }}
              />
              <img
                src={image3}
                alt=""
                style={{
                  width: "30rem",
                  padding: "0px",
                  margin: "49px -104px 25px 69px",
                  height: "22rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SixthSection;
