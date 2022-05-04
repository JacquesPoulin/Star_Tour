import React from "react";
import NavBar from "../components/Navbar";
import Form from "../components/contact/Form";
import GoToTop from "../components/GoToTop";

const Contact = () => {
  return (
    <div className="min-h-screen bg_nightsky dark:bg_lightsky">
      <NavBar />
      <Form />
      <GoToTop />
    </div>
  );
};

export default Contact;
