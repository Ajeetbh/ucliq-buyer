import React from "react";
import "../style/buyerseller.css";

const BuyerSeller = () => {
  return (
    <>
      <div className="container1">
        <div className="fifth-two">
          <h1 className="fifthheading">Creating opportunity for all</h1>
        </div>
        <div className="w-100">
          <h1 className="subheadingbuy">Become a Buyer</h1>
          <div className="mainsubdiv">
            <div className="subdiv1">
              <h2>benefits of becoming a buyer</h2>
              <div className="secondsuvdiv">
                <ul className="buyerul">
                  <li>20% more revenue</li>
                  <li>one stop sale</li>
                  <li>payments in 24 hours</li>
                  <li>transparent weighing</li>
                </ul>
              </div>
            </div>
            <div className="subdiv2">
              <h2 style={{ margin: "5px 0px 20px 100px" }}>
                how to become a buyer
              </h2>
              <div className="secondsuvdiv">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Company name*</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      id="company-name"
                      class="form-control"
                      placeholder="Enter your Shop name"
                      style={{ width: "25rem" }}
                    />
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Number*</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter your number"
                      style={{ margin: "0px 0px 0px 53px", width: "25rem" }}
                    />
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">State*</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your State"
                      style={{ margin: "6px 0px 0px 75px", width: "25rem" }}
                    />
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Pincode*</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter your pincode"
                      style={{ margin: "6px 0px 0px 53px", width: "25rem" }}
                    />
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Established year*</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="number"
                      placeholder="YYYY"
                      min="1700"
                      max="2100"
                      style={{ width: "4rem" }}
                    />
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Seller type*</label>
                  </div>
                  <div class="col-auto">
                    <select
                      name="seller-type"
                      id="seller"
                      style={{ width: "15rem", margin: "6px 0px 0px 33px" }}
                    >
                      <option value="Manufacturer/Producer">
                        Manufacturer/Producer
                      </option>
                      <option value="Wholeseller">Wholeseller</option>
                      <option value="Trader">Trader</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">Category*</label>
                  </div>
                  <div class="col-auto">
                    <select
                      name="seller-type"
                      id="seller"
                      style={{ width: "15rem", margin: "6px 0px 0px 43px" }}
                    >
                      <option value="Manufacturer/Producer">Meat</option>
                      <option value="Wholeseller">Fruits</option>
                      <option value="Trader">Vegatables</option>
                      <option value="Other">FMCG</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="btn btn-primary">Register</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerSeller;
