import React from "react";
import "../style/buyerseller.css";

const BuyerSeller = () => {
  return (
    <>
      <div className="container1">
        {/* <div className="fifth-two">
          <h1 className="fifthheading">Creating opportunity for all</h1>
        </div> */}
        <div className="w-100">
          <h1 className="subheadingbuy">Benefits</h1>
          <div className="mainsubdiv">
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Competitive Pricing</h2>
              <div className="secondsuvdiv">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1664724149/competitive_pricing_1_dxmmcx.png"
                  alt=""
                  style={{ width: "19rem", height: "14rem" }}
                  className="buyersellerimg"
                />
              </div>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Fresh Quality </h2>
              <div className="secondsuvdiv">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1664725738/fresh_quality_ywio3s.png"
                  alt=""
                  style={{ width: "19rem", height: "14rem" }}
                  className="buyersellerimg"
                />
              </div>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>High-Speed Logistic Support </h2>
              <div className="secondsuvdiv">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1664727218/logistic2_bpwq9a.png"
                  alt=""
                  style={{ width: "19rem", height: "182px" }}
                  className="buyersellerimg"
                />
              </div>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Credit Facilities</h2>
              <div className="secondsuvdiv">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1664727738/credit_adv_1_z9hosm.png"
                  alt=""
                  style={{ width: "19rem", height: "14rem" }}
                  className="buyersellerimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerSeller;
