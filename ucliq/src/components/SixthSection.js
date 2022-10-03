import React from "react";
import "../style/secondsection.css";
import image3 from '../images/kyc1.jpg'
import image4 from '../images/download1.jpg'

const SixthSection = () => {
  return (
    <>
      <div className="container">
        <div className="fifthmain">
          <div className="sixth-two">
            <h1 className="fifthheading">
            How to register as a Buyer?
            </h1>
            <img
              src={image3}
              alt=""
              style={{
                width: "41rem",
                padding: "1px 1px 1px 1px",
                margin: "48px 1px 19px -160px",
              }}
            />
            <img
              src={image4} alt=""
              style={{
                width: "41rem",
                padding: "1px 1px 1px 1px",
                margin: "49px -112px 25px 54px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SixthSection;
