import React from "react";
import Header from "./Header";
import "../style/home.css";
import Contact from '../components/Contact'
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
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Home;
