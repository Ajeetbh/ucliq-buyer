import React from "react";
import Header from "./Header";
import "../style/home.css";

import AboutUcliq from "../components/AboutUcliq";
//import HomeSellerSec from "../components/HomeSellerSec";


const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <AboutUcliq />
      </section>
      {/* <section>
        <HomeSellerSec />
      </section>  */}
    </>
  );
};

export default Home;
