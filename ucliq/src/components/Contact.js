import React, { useState } from "react";
import "../style/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password Not Match");
    } else {
      alert(
        'A form was submitted with Name :"' +
          name +
          '" ,Mobile :"' +
          mobile +
          '" and Email :"' +
          email +
          '"'
      );
    }
    e.preventDefault();
  };

  return (
    <div className="Signup">
      <header className="Signup-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1> Contact </h1>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          <br />
          <label>Mobile:</label>
          <input
            type="text"
            value={mobile}
            required
            onChange={(e) => {
              handleMobileChange(e);
            }}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
export default Contact;
