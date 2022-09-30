import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/secondsection.css";

const FourthSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>Become a Seller/Buyer</h1>
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
                      src="https://res.cloudinary.com/antrix/image/upload/v1664474527/48bd89_4cb8201fa4a844459245a03c0d10848e_mv2_h3gcdl.webp"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1664474527/48bd89_4cb8201fa4a844459245a03c0d10848e_mv2_h3gcdl.webp"
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1664474527/48bd89_4cb8201fa4a844459245a03c0d10848e_mv2_h3gcdl.webp"
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

export default FourthSection;
