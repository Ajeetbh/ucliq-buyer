import React from "react";
import Header from "./Header";
import "../style/home.css";
import Contact from "../components/Contact";
import AboutUcliq from "../components/AboutUcliq";
import BuySell from "./BuySell";
import Seller from "./Seller";
import HomeSellerSec from "./HomeSellerSec";
const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <AboutUcliq />
      </section>
      <section>
        <HomeSellerSec />
      </section>
    </>
  );
};

export default Home;
