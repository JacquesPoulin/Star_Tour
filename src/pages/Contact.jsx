import React from "react";
import Form from "../components/contact/Form";
import GoToTop from "../components/GoToTop";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg_nightsky dark:bg_lightsky">
      <Form />
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Contact;
