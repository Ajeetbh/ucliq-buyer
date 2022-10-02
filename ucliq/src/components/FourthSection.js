import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/secondsection.css";

const FourthSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>Creating opportunity for all</h1>
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
                    {/* <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1664474527/48bd89_4cb8201fa4a844459245a03c0d10848e_mv2_h3gcdl.webp"
                      alt="First slide"
                    /> */}

                    <div className="d-block w-100">
                      <h1>Become a Buyer</h1>
                      <div className="subdiv">
                        <h2>benefits of becoming a buyer</h2>
                        <div className="secondsuvdiv">
                          <ul>
                            <li>20% more revenue</li>
                            <li>one stop sale</li>
                            <li>payments in 24 hours</li>
                            <li>transparent weighing</li>
                          </ul>
                        </div>
                      </div>
                      <div className="subdiv">
                        <h2>how to become a buyer</h2>
                        <div className="secondsuvdiv">
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                          <div class="row g-3 align-items-center">
                            <div class="col-auto">
                              <label
                                for="inputPassword6"
                                class="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div class="col-auto">
                              <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                              />
                            </div>
                            <div class="col-auto">
                              <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://res.cloudinary.com/antrix/image/upload/v1664705659/WhatsApp_Image_2022-10-02_at_15.41.33_lcxldl.jpg"
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
