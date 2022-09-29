import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import SectionSecond from "./SectionSecond";
import Service from "./Service";
// import image from "../images/rbbanner2.webp";
// import "../style/home.css";

const Home = () => {
  return (
    <>
      {/* section one */}
      <section>
        <Header />
      </section>
      <section>
        <SectionSecond />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
