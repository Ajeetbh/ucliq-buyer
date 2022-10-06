import React from "react";
import "../style/about.css";
import OurTeam from "../components/OurTeam";

const About = () => {
  return (
    <div>
    <div className="about" data-aos="zoom-in-up">
      <h1>About Us</h1>
      <div className="aboutInfo w3-container w3-panel w3-border-left w3-border-right w3-card-4">
        <p>
          UcliQ is a Business-to-Business (B2B) e-commerce company that brings a
          large number of retailers & sellers onto one platform. With a dream of
          digitalizing 25% of traditional supply chains, it is currently
          operating in Delhi/NCR. UcliQ connects farmers, manufacturers,
          producers and wholesalers with retailers, kirana stores, cafes and
          restaurants, thereby helping local sellers to expand their businesses
          without having to worry about the hassles involved in the supply
          chains.
          <br /> <br />
          With UcliQ, businesses can :<br />
          • BUY & SELL according to their terms, with safe payments, trustworthy
          logistics, and on-time delivery guarantees.
          <br />
          • EXPAND their network by connecting them to new suppliers, retailers,
          and organizations.
          <br />
          • Get assurance about the QUALITY and FRESHNESS of their products
          <br />
          • Get REAL-TIME DATA on prices, to ensure all parties get the best out
          of the business transactions
          <br />
          <br />
          <span>BUY & SELL</span>
          <br />
          <br />
          If you want to buy or sell, UcliQ is just a click or a phone call
          away! It provides hassle-free and timely pickup and delivery, to
          ensure your convenience at all times
          <br />
          <br />
          <span>GROW</span>
          <br />
          <br />
          For its buyers and sellers, UcliQ facilitates entry into new markets
          through quick, low-cost delivery services. By connecting you to the
          right sellers/buyers, it helps you grow your business without worrying
          about the logistical problems along the way
          <br />
          <br />
          <span>QUALITY</span>
          <br />
          <br />
          Quality and freshness of the products are always guaranteed by UcliQ’s
          delivery team. On-time delivery and reduction of wastage are its
          topmost priorities. M<br />
          <span>BEST RATES</span>
          <br />
          <br />
          UcliQ enables transparency along the entire supply chain. Real time
          data on prices mean you get the best deals and timely, online methods
          of payment ensures safe and smooth transactions for all parties
          involved.
        </p>
      </div>
    </div>
    <OurTeam/>
    </div>
  );
};

export default About;
