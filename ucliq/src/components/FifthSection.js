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
              seafoods with our Mobile app.<br/> Download the app now and get some
              excited offers and discounts.
            </p>
          </div>
        </div>
        <div className="buyer">
          <div className="buyerheader">
          <h1>UcliQ's For Buyer</h1>
          <p>Delight your customers , every single day</p>
          </div>
          <div className="buyerdetail w3-card-4">
            <div className="detail">
              <div className="icon">
            <i class='fas fa-fish' style={{fontSize:'48px',color:'white'}}></i>
              </div>
              <h3>Unmatched Freshness</h3>
              <p>Our technology enabled supply chain delivers the freshest fish
                and seafoods with the highest shelf life.
              </p>
            </div>
            <div className="detail">
              <div className="icon">
              <i class="fa fa-thumbs-up" style={{fontSize:'48px',color:'white'}}></i>
              </div>
              <h3>Reliable Supply</h3>
              <p>No more haggling with suppliers on last minute suprises and price. Get 
                access to a wide variety of products.
              </p>
            </div>
            <div className="detail">
            <div className="icon">
            <i class='fa fa-truck' style={{fontSize:'48px',color:'white'}}></i>
            </div>
               <h3>Convenience</h3>
              <p>No more early morning trips to the local fish market. we deliver to
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FifthSection;
