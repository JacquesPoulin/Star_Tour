import React from "react";
import BookingForm from "../components/booking/BookingForm";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const Booking = () => {
  return (
    <div>
      <BookingForm />
      {/* <BookingRecap /> */}
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Booking;
