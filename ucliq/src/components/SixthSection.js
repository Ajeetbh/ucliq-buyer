import React from "react";
import "../style/sixsection.css";

const SixthSection = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#af1212", fontSize: "3rem" }}>
        How to register as a Buyer?
      </h1>
      <div className="flex-container">
        <div className="divcol2" data-aos="zoom-in">
          <h5>
            Download Ucliq <br /> Buyer App
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucliq_customer&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-android"
              aria-hidden="true"
              style={{ fontSize: "48px", color: "black" }}
            ></i>
          </a>
        </div>
        <div className="divcol3" data-aos="zoom-in">
          <i
            className="fa fa-mobile"
            style={{ fontSize: "48px", color: "#f3da35" }}
          ></i>
          <h5 style={{ margin: "-10px 1px" }}>Verify mobile number</h5>
        </div>
        <div className="divcol4" data-aos="zoom-in">
          <h5>Complete KYC</h5>
          <i className="fa fa-home" style={{ fontSize: "48px" }}></i>
        </div>
      </div>
    </div>
  );
};
export default SixthSection;

// import React from "react";
// import "../style/secondsection.css";
// import kyc from "../images/kyc.jpg";
// import signup from "../images/signup.jpg";
// import download from "../images/download.jpg";
// const SixthSection = () => {
//   return (
//     <>
//       <div className=''Name="container sixthMain">
//         <div className="fifthmain">
//           <div className="sixth-two">
//             <h1 className="Sixheading" data-aos="zoom-in-left">
//               How to register as a Buyer?
//             </h1>
//             <div
//               className="col-md-4 registerbuyer"
//               data-aos="fade-up"
//               data-aos-duration="3000"
//             >
//               <div className="registerInfo">
//                 <div className="pic1">
//                   <img
//                     src={download}
//                     alt=""
//                     style={{
//                       width: "320px",
//                       padding: "0px",
//                       margin: "48px 20px 9px 20px",
//                       height: "450px",
//                       lineHeight: "40px",

//                       boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)",

//                       //boxShadow: "0px 6px 11px -2px rgb(0 0 0 / 75%)"
//                     }}
//                   />
//                 </div>
//                 <div className="link1">
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
//               <div className="registerInfo1">
//                 <div className="pic2">
//                   <img
//                     src={signup}
//                     alt=""
//                     style={{
//                       width: "320px",
//                       padding: "0px",
//                       margin: "49px 20px 9px 100px",
//                       height: "450px",
//                       lineHeight: "40px",
//                       boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)",
//                       //boxShadow: "0px 6px 11px -2px rgb(0 0 0 / 75%)"
//                     }}
//                   />
//                 </div>
//                 <div className="link2">
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
//               <div className="registerInfo1">
//                 <div className="pic3">
//                   <img
//                     src={kyc}
//                     alt=""
//                     style={{
//                       width: "320px",
//                       padding: "0px",
//                       margin: "49px 20px 9px 100px",
//                       height: "450px",
//                       lineHeight: "40px",
//                       boxShadow: "5px 6px 11px -2px rgb(0 0 0 / 75%)",
//                       //boxShadow: "0px 6px 11px -2px rgb(0 0 0 / 75%)"
//                     }}
//                   />
//                 </div>
//                 <div className="link3">
//                   <span>
//                    <a
//   href="https://www.ucliq.in/kyc"
//   target="_blank"
//   rel="noreferrer"
// >
//   Start KYC
// </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SixthSection;
