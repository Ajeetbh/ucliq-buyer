import React from "react";
import "../style/secondsection.css";

const FifthSection = () => {
  return (
    <>
      <div className="container">
        <div className="fifthmain">
          <div className="fifth-two">
            <h1 className="fifthheading">Register as a Buyer</h1>
            <br />
            <p>
              UcliQ can serve you up the best in chicken, mutton, fish and
              seafoods with our Mobile app. Download the app now and get some
              excited offers and discounts.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/antrix/image/upload/v1664705670/WhatsApp_Image_2022-10-02_at_15.41.34_1_hc1ceg.jpg"
            alt=""
            style={{ width: "58rem", padding: "131px 0px 0px -1px" }}
            className="fifthsecimage"
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default FifthSection;
