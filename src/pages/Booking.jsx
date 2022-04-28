import React from "react";
import BookingForm from "../components/booking/BookingForm";
import NavBar from "../components/Navbar";
import BookingRecap from "../components/booking/BookingRecap";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const Booking = () => {
  return (
    <div>
      <NavBar />
      <BookingForm />
      {/* <BookingRecap /> */}
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Booking;
