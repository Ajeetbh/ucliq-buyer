import React from "react";
import Header from "./Header";
import "../style/home.css";
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Home;
