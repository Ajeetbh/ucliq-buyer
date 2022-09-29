import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/secondsection.css";

const SectionSecond = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>10000+ Buyers/ 5000+ sellers</h1>
        </div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                {/* <h3>React Bootstrap Carousel</h3> */}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1661222560/paneer_tikka_burger_p1aqem.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1661222560/paneer_tikka_burger_p1aqem.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1661222560/paneer_tikka_burger_p1aqem.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSecond;
