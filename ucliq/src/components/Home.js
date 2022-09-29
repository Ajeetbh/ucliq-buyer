import React from "react";
import About from "./About";
import Contact from "./Contact";
import FifthSection from "./FifthSection";
import Footer from "./Footer";
import FourthSection from "./FourthSection";
import Header from "./Header";
import SectionSecond from "./SectionSecond";
import Service from "./Service";
import SixthSection from "./SixthSection";
// import image from "../images/rbbanner2.webp";
import "../style/home.css";

const Home = () => {
  const style = {
    margin: "220px",
  };
  const style2 = {
    width: "100%",
    background: "#e74c3c",
    height: "30rem",
  };
  return (
    <>
      {/* section one */}
      <section>
        <Header />
      </section>
      <section style={style}>
        <SectionSecond />
      </section>

      <section style={style}>
        <Service />
      </section>

      <section style={style2}>
        <FifthSection />
      </section>
      <section style={style}>
        <FourthSection />
      </section>
      <section className="sixthback">
        <SixthSection />
      </section>

      <section style={style}>
        <Contact />
      </section>

      <section style={style}>
        <Footer />
      </section>
    </>
  );
};

export default Home;
