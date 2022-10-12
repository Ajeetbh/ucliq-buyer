import React from "react";
import "../style/regseller.css";

const RegSeller = () => {
  return (
    <div className="container container6">
      <div className="regheader">
        <h1>How to register as a Seller?</h1>
      </div>
      <div className="flex-container">
        <div className="divcol2" data-aos="zoom-in">
          <h5>
            Download Ucliq <br /> Seller App
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucliq_seller_panel"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-android"
              aria-hidden="true"
              style={{ fontSize: "48px" }}
            ></i>
          </a>
        </div>
        <div className="divcol3" data-aos="zoom-in">
          <i className="fa fa-mobile" style={{ fontSize: "48px" }}></i>
          <h5>Verify mobile number</h5>
        </div>
        <div className="divcol4" data-aos="zoom-in">
          <h5>Complete KYC</h5>
          <i className="fa fa-home" style={{ fontSize: "48px" }}></i>
        </div>
      </div>
    </div>
  );
};
export default RegSeller;

// import React from "react";
// import kyc from "../images/kyc.jpg";
// import signup from "../images/signup.jpg";
// import download from "../images/download.jpg";
// import "../style/regseller.css";

// const RegSeller = () => {
//   return (
//     <div>
//       <div className="container sixthMain">
//         <div className="fifthmain">
//           <div className="regseller">
//             <h1
//               className="regbuyerheading"
//               data-aos="fade-down-right"
//               style={{ textAlign: "center", marginLeft: "-10rem" }}
//             >
//               How to register as a Seller?
//             </h1>
//             <div className="col-md-4 registerbuyer" data-aos="flip-up">
//               <div className="registerInfo">
//                 <div className="pic1">
//                   <img
//                     src={download}
//                     alt=""
//                     className="pic-one"
//                     // style={{
//                     //   width: "320px",
//                     //   padding:"0px",
//                     //   margin: "48px 50px 9px -50px",
//                     //   height: "450px",
//                     //   lineHeight: "40px",
//                     //   boxShadow: "0px 6px 11px -2px rgb(0 0 0 / 75%)",
//                     // }}
//                   />
//                 </div>
//                 <div className="link4">
//                   <span>
//                     <a
//                       href="https://play.google.com/store/apps/details?id=com.ucliq_customer&gl=US"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Download the App
//                     </a>
//                   </span>
//                 </div>
//               </div>
//               <div className="registerInfo">
//                 <div className="pic2">
//                   <img src={signup} alt="" className="pic-two" />
//                 </div>
//                 <div className="link5">
//                   <span>
//                     <a
//                       href="https://www.ucliq.in/login"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Signup
//                     </a>
//                   </span>
//                 </div>
//               </div>
//               <div className="registerInfo">
//                 <div className="pic3">
//                   <img src={kyc} alt="" className="pic-two" />
//                 </div>
//                 <div className="link6">
//                   <span>
//                     <a
//                       href="https://www.ucliq.in/kyc"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Start KYC
//                     </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegSeller;
