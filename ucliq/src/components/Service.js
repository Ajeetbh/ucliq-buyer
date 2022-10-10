import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/secondsection.css";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="serviceHead">
          <h1>10000+ Buyers/ 5000+ sellers</h1>
        </div>
        <div>
          <div className="container-fluid bg-white mb-5 mt-3">
            <div className="row">
              <div className="col-12">
                <Carousel className="item">
                  <Carousel.Item>
                    <h1>Fruits</h1>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item className="item">
                    <h1>Vegetables</h1>
                    <img
                      className="d-block w-100"
                      src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000"
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item className="item">
                    <h1>Seafood</h1>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/fresh-salmon-steak-with-a-variety-of-seafood-and-herbs-picture-id1156027693?s=612x612"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="item">
                    <h1>Meat & Poutary</h1>
                    <img
                      className="d-block w-100"
                      src="https://www.meatpoultry.com/ext/resources/2021/11/VariousMeatCuts_Lead.jpg?t=1636652511&width=1080"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="item">
                    <h1>Milk & Dairy</h1>
                    <img
                      className="d-block w-100"
                      src="https://image.shutterstock.com/image-photo/various-dairy-products-260nw-627224804.jpg"
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

export default Service;
