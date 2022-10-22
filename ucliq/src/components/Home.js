import React from "react";
import Header from "./Header";
import "../style/home.css";
import AboutUcliq  from "../components/AboutUcliq";
const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <AboutUcliq/>
      </section>
    </>
  );
};

export default Home;
