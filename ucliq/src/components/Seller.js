import React from "react";
import "../style/seller.css";

const Seller = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="seller">
            <div className="sellerheader">
              <h1>Become a Seller</h1>
            </div>
            <div className="sellerInfo">
              <div className="seller1">
                <div className="column1">
                  <div className="icons">
                    <i class="fa fa-male" style={{fontSize: "48px",color: "white"}}></i>
                  </div>
                  <h5>New Customers</h5>
                </div>
                <div className="column1">
                  <div className="icons">
                    <i class="fa fa-store" style={{fontSize: "48px",color: "white"}}></i>
                  </div>
                  <h5>Digital Store Front</h5>
                </div>
                <div className="column1">
                  <div className="icons">
                    <i class="fa fa-credit-card" style={{fontSize: "48px",color: "white"}}></i>
                  </div>
                  <h5>Secured Payment</h5>
                </div>
              </div>
              <div className="seller2">
                <div className="column2">
                  <div className="icons">
                    <i class="fa fa-truck" style={{fontSize: "48px",color: "white"}}></i>
                  </div>
                  <h5>High-Speed Logistics Support</h5>
                </div>
                <div className="column2">
                  <div className="icons">
                    <i class="fa fa-thumbs-up" style={{fontSize: "48px",color: "white"}}></i>
                  </div>
                  <h5>Finance and Capital Support</h5>
                </div>
              </div>
            </div> 
          </div>    
      </div>     
  </div>
  </div>
  )
};

export default Seller;
