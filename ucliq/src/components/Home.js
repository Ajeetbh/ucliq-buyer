import React from "react";
//import About from "./About";
import Contact from "./Contact";
import FifthSection from "./FifthSection";
import Footer from "./Footer";
import FourthSection from "./FourthSection";
import Header from "./Header";
import SectionSecond from "./SectionSecond";
//import Service from "./Service";
import SixthSection from "./SixthSection";
// import image from "../images/rbbanner2.webp";
import "../style/home.css";

const Home = () => {
  const style = {
    margin: "220px",
  };
  const style2 = {
    width: "100%",
    // background: "#e74c3c",
    height: "476px",
  };

  const style3 = {
    width: "100%",
    background: "#e74c3c",
    height: "250px",
  };
  return (
    <>
      {/* section one */}
      <section>
        <Header />
      </section>
      <section style={{ margin: "80px 0px" }}>
        <SectionSecond />
      </section>
      {/* <section style={style} id={"Service-section"}>
        <Service />
      </section> */}
      <section style={style2}>
        <FifthSection />
      </section>
      {/* buyer seller */}
      <section style={style}>
        <FourthSection />
      </section>
      <section className="sixthback">
        <SixthSection />
      </section>
      <section style={style}>
        <Contact />
      </section>
      <section style={style3}>
        <Footer />
      </section>
    </>
  );
};

export default Home;
