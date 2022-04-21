import React from "react";
import NavBar from "../components/Navbar";
import Form from "../components/contact/Form";

const Contact = () => {
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <Form />
    </div>
  );
};

export default Contact;
