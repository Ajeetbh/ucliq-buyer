import React from 'react'
import "../style/regbuyer.css";

const RegBuyer = () => {
  return (
    <div className='container'>
      <h1 className="header4">
        How to register as a Buyer?
      </h1>
      <div className='border'>
        <div className='div1'>
          <div className='icons'>
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
          <h5>Download Ucliq <br /> Buyer App</h5>
        </div>
        <div className='div2'>
          <h5>Verify Mobile Number</h5>
          <div className='icons'>
          <i
            className="fa fa-mobile"
            style={{ fontSize: "48px", color: "#f3da35" }}
          ></i>
          </div>
        </div>
        <div className='div3'>
          <div className='icons'>
          <i className="fa fa-home" style={{ fontSize: "48px" }}></i>
          </div>
          <h5>Complete KYC</h5>
        </div>
      </div>
    </div>
  )
}
export default RegBuyer;