import React from "react";
import "../style/buyer.css";

const Buyer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="buyer5">
          <div className="buyerheader5">
            <h1>UcliQ's For Buyer</h1>
            <p>Delight your customers , every single day</p>
          </div>
          <div className="buyerdetails">
            <div className="detail">
              <div className="icon">
                <i class="fa fa-coffee"></i>
              </div>
              <h3>Unmatched Freshness</h3>
              <div>
                <p className="detailP">
                  Our technology enabled supply chain delivers the freshest fish
                  and seafoods just like coffee with the highest shelf life.
                </p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <i class="fa fa-thumbs-up"></i>
              </div>
              <h3>Reliable Supply</h3>
              <div>
                <p className="detailP">
                  No more haggling with suppliers on last minute suprises and
                  price. Get access to a wide variety of products.
                </p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <i class="fa fa-truck"></i>
              </div>
              <h3>Convenience</h3>
              <div className="detailP">
                <p>
                  No more early morning trips to the local fish market. we
                  deliver to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buyer;

// import React from "react";
// import "../style/buyer.css";

// const Buyer = () => {
//   return (
//     <>
//      <div className="container">
//         <div className="buyer" data-aos="flip-left">
//           <div className="buyerheader">
//             <h1>UcliQ's For Buyer</h1>
//             <p>Delight your customers , every single day</p>
//           </div>
//           <div className="buyerdetail w3-card-4">
// <div className="detail">
//   <div className="icon">
//     <i class="fa fa-coffee"></i>
//   </div>
//   <h3>Unmatched Freshness</h3>
//   <div>
//   <p className="detailP">
//     Our technology enabled supply chain delivers the freshest fish
//     and seafoods just like coffee with the highest shelf life.
//   </p>
//   </div>
// </div>
// <div className="detail">
//   <div className="icon">
//     <i class="fa fa-thumbs-up"></i>
//   </div>
//   <h3>Reliable Supply</h3>
//  <div>
//  <p className="detailP">
//     No more haggling with suppliers on last minute suprises and
//     price. Get access to a wide variety of products.
//   </p>
//  </div>
// </div>
// <div className="detail">
//   <div className="icon">
//     <i class="fa fa-truck"></i>
//   </div>
//   <h3>Convenience</h3>
//   <div className="detailP">
//   <p>
//     No more early morning trips to the local fish market. we deliver
//     to your doorstep.
//   </p>
//  </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Buyer;
