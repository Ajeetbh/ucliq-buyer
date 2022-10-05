import React from "react";
//import image4 from "../images/career.webp";
import "../style/career.css";

const Career = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="career">
            <div className="col-md-4 careerInfo" data-aos="fade-right">
              <h2 style={{ width: "36rem" }}>
                A Ninja is resilient, smart, and ambitious. Sounds like you?
              </h2>
              <p style={{ width: "36rem" }}>
                We're always on the lookout for the right person to join the
                Ninja Clan.
              </p>
              <button>Find suitable positions</button>
            </div>
            <div className="col-md-8 careerImage" data-aos="fade-left">
              <img
                src="https://res.cloudinary.com/antrix/image/upload/v1664639838/undraw_Process_re_gws7_qupecj.png"
                alt="careerimage"
                style={{ height: "32rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info" data-aos="flip-left">
        <h1>Be a part of something great</h1>
        <p>
          <span>We are 4000+ people strong.</span> Ninjacart is the place for{" "}
          <span>innovators, problem-solvers</span> and{" "}
          <span>executionists</span>. If you're looking for a job that presents{" "}
          <span>real-world challenges </span>and lets you explore your
          potential, the infectious energy here will make you create wonders
          that exceed your own expectations.{" "}
        </p>
      </div>
      <div className="info1" data-aos="zoom-in">
        <h1>Why we do it</h1>
        <p>
          For decades, the traditional Fresh Produce Supply Chain was highly
          inefficient with zero food security, until a few brave men decided to
          tackle the age-old problem and built a 100% traceable supply chain.
          We, at Ninjacart, intend to improve the lives of producers, business
          owners, and consumers in a meaningful manner while solving one of the
          hardest supply chain problems our country has to offer with
          technology. <span>Know more</span>
        </p>
      </div>
    </>
  );
};

export default Career;
