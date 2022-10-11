import React from "react";
import "../style/buyerseller.css";

const BuyerSeller = () => {
  return (
    <>
      <div className="container1">
        <div className="w-100">
          <h1 className="subheadingbuy">Benefits</h1>
          <div className="mainsubdiv">
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Competitive Pricing</h2>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Fresh Quality </h2>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>High-Speed Logistic Support </h2>
            </div>
            <div className="subdiv1" data-aos="zoom-in">
              <h2>Credit Facilities</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerSeller;
