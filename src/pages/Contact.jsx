import React from "react";
import NavBar from "../components/Navbar";
import Form from "../components/contact/Form";
import GoToTop from "../components/GoToTop";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg_nightsky dark:bg_lightsky">
      <NavBar />
      <Form />
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Contact;
