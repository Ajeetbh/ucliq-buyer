import React from "react";

const HomeSellerSec = () => {
  return (
    <div>
      <div className="buyer">
        <div className="buyer1">
          <div className="detail1">
            <div className="icon1">
              <i
                class="fa fa-male"
                style={{
                  fontSize: "48px",
                  color: "white",
                  padding: "25px 1px 1px 1px",
                }}
              ></i>
            </div>
            <h3 className="buyheadnew">New Customers</h3>
          </div>
          {/*.2................ .............................. */}
          <div className="detail1">
            <div className="icon1">
              <i
                class="fa fa-store"
                style={{
                  fontSize: "48px",
                  color: "white",
                  padding: "25px 1px 1px 1px",
                }}
              ></i>
            </div>
            <h3 className="buyheadnew">Digital Store Front</h3>
          </div>
          {/*.3................ .............................. */}
          <div className="detail1">
            <div className="icon1">
              <i
                class="fa fa-credit-card"
                style={{
                  fontSize: "48px",
                  color: "white",
                  padding: "25px 1px 1px 1px",
                }}
              ></i>
            </div>
            <h3 className="buyheadnew">Secured Payment</h3>
          </div>
        </div>
        {/*4................. .............................. */}
        <div className="buyer2">
          <div className="detail2">
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
            <h3 className="buyheadnew">High-Speed Logistics Support</h3>
          </div>
          {/*5................. .............................. */}
          <div className="detail2">
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
            <h3 className="buyheadnew">Finance and Capital Support</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSellerSec;
