import React from "react";
import "../style/regseller.css";

const BecomeBuyer = () => {
  return (
    <div>
      <div className="container" id="service">
        <div className="fifthmain">
          <div className="fifth-two">
            <h1 className="fifthheading" data-aos="fade-left">
              Become a Seller
            </h1>
            <br />
          </div>
        </div>
        <div className="buyer1">
          <div className="buyerdetail1 w3-card-4" data-aos="fade-right">
            <div
              className="detail-one"
              style={{
                fontSize: "48px",
                color: "white",
                padding: "25px 120px 1px 1px",
              }}
            >
              <div className="icon1">
                <i
                  class="fa fa-coffee"
                  style={{
                    fontSize: "48px",
                    color: "white",
                    padding: "25px 1px 1px 1px",
                  }}
                ></i>
              </div>
              <h3>New Customers</h3>
            </div>
            <div
              className="detail2"
              style={{
                fontSize: "48px",
                color: "white",
                padding: "25px 161px 1px 1px",
              }}
            >
              <div className="icon1">
                <i
                  class="fa fa-thumbs-up"
                  style={{
                    fontSize: "48px",
                    color: "white",
                    padding: "25px 1px 1px 1px",
                  }}
                ></i>
              </div>
              <h3>Digital Store Front</h3>
            </div>
            <div
              className="detail3"
              style={{
                fontSize: "48px",
                color: "white",
                padding: "25px 1px 1px 1px",
              }}
            >
              <div className="icon1">
                <i
                  class="fa fa-truck"
                  style={{
                    fontSize: "48px",
                    color: "white",
                    padding: "25px 1px 1px 1px",
                  }}
                ></i>
              </div>
              <h3>Secured Payment</h3>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="buyer2">
          <div className="buyerdetail1 w3-card-4" data-aos="fade-left">
            <div
              className="detail4"
              style={{
                fontSize: "48px",
                color: "white",
                padding: "25px 161px 1px 1px",
              }}
            >
              <div className="icon2">
                <i
                  class="fa fa-coffee"
                  style={{
                    fontSize: "48px",
                    color: "white",
                    padding: "25px 1px 1px 1px",
                  }}
                ></i>
              </div>
              <h3>High-Speed Logistics Support</h3>
            </div>
            <div
              className="detail5"
              style={{
                fontSize: "48px",
                color: "white",
                padding: "25px 1px 1px 1px",
              }}
            >
              <div className="icon2">
                <i
                  class="fa fa-thumbs-up"
                  style={{
                    fontSize: "48px",
                    color: "white",
                    padding: "25px 1px 1px 1px",
                  }}
                ></i>
              </div>
              <h3>Finance and Capital Support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeBuyer;
