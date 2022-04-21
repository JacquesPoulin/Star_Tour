import React from "react";
import NavBar from "../components/Navbar";
import Form from "../components/contact/Form";
import GoToTop from "../components/GoToTop";

const Contact = () => {
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <Form />
      <GoToTop />
    </div>
  );
};

export default Contact;
