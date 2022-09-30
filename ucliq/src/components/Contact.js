import React, { useState } from "react";
import "../style/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [supplier, setSupplier] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextArea] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSupplierChange = (e) => {
    setSupplier(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
  };
  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Name :"' +
        name +
        '" ,Mobile :"  ' +
        mobile +
        '" ,and Email :"  ' +
        email +
        '",and Supplier"   ' +
        supplier +
        '",and Subject:"   ' +
        subject +
        '",Message"  ' +
        textarea +
        '"'
    );
  };
  return (
    <div classname="container-fluid contact">
      <div className="Signup">
        <header className="Signup-header">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1> Contact Us </h1>
<<<<<<< HEAD
          <div className="contactt-1">
          <input
              type="text"
              value={name}
              placeholder="Name"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
          </div>
            
=======
            <div className="contactform1">
              <input
                type="text"
                value={name}
                placeholder="Name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ width: "290px", margin: "0 150px 0 0" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
>>>>>>> c08221d910e60999fad626fd0794e1dda45a01b1
            <br />
            <br />
            <div className="contactform1">
              <input
                type="text"
                placeholder="Phone"
                value={mobile}
                required
                onChange={(e) => {
                  handleMobileChange(e);
                }}
                style={{ width: "290px", margin: "0 150px 0 0" }}
              />
              <input
                type="text"
                placeholder="Supplier/Restaurant"
                value={supplier}
                required
                onChange={(e) => {
                  handleSupplierChange(e);
                }}
              />
            </div>
            <br />
            <br />
            <input
              className="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              required
              onChange={(e) => {
                handleSubjectChange(e);
              }}
            />
            <br />
            <br />
            <textarea
              className="textarea"
              type="text"
              placeholder="Type your message here..."
              value={textarea}
              required
              onChange={(e) => {
                handleTextAreaChange(e);
              }}
            />
            <br />
            <br />
            <input type="submit" value="Submit" className="submit" />
          </form>
        </header>
      </div>
    </div>
  );
}
export default Contact;
