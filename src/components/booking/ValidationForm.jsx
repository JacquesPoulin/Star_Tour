/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import PropTypes from "prop-types";
import BookingRecap from "./BookingRecap";
import PassengerName from "./PassengerName";
import PassengerContact from "./PassengerContact";
import SubmitForm from "./SubmitForm";

const ValidationForm = ({
  passengers,
  destination,
  startDate,
  endDate,
  ships,
}) => {
  // >> STATES & SETTERS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalRecap, setModalRecap] = useState(false);

  // ------------------------------------------

  // >> FUNCTIONS
  const openModalRecap = () => {
    setModalRecap(true);
  };

  const closeModalRecap = () => {
    setModalRecap(false);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // ------------------------------------------

  return (
    <div className="scroll-smooth top-20 w-3/5 bp2:w-[80vw] bp2:flex bp2:flex-col bp2:items-center h-full py-8 ml-10 bp2:ml-0 mt-16 border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[8%] bg-opacity-[8%] font-orb">
      <form className="flex flex-col justify-center items-center mt-4 text-slate-50 tracking-wide">
        <h1 className="mb-3   text-2xl tracking-wide ">VALIDEZ VOTRE VOYAGE</h1>

        {/* FORM CONTAINER */}
        <div className="w-full flex flex-col items-center">
          {/* FirstName & Name */}
          <PassengerName
            setFirstName={setFirstName}
            setLastName={setLastName}
          />

          {/* Phone & Mail */}
          <PassengerContact
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />
        </div>
        <SubmitForm
          isChecked={isChecked}
          handleCheck={handleCheck}
          openModalRecap={openModalRecap}
        />
        {modalRecap && (
          <BookingRecap
            closeModalRecap={closeModalRecap}
            firstName={firstName}
            lastName={lastName}
            passengers={passengers}
            destination={destination}
            startDate={startDate}
            endDate={endDate}
            ships={ships}
          />
        )}
      </form>
    </div>
  );
};

ValidationForm.propTypes = {
  passengers: PropTypes.number.isRequired,
  destination: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  ships: PropTypes.string.isRequired,
};
export default ValidationForm;
