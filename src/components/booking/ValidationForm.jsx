/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import PropTypes from "prop-types";
import BookingRecap from "./BookingRecap";
import PassengerName from "./PassengerName";
import PassengerContact from "./PassengerContact";
import SubmitForm from "./SubmitForm";

// ------------------------------------------

const ValidationForm = ({ passengers, destination, startDate, endDate }) => {
  // >> STATES & SETTERS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalRecap, setModalRecap] = useState(false);

  // ------------------------------------------

  // >> FUNCTIONS
  const openModalRecap = (e) => {
    e.preventDefault();
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
    <div className="scroll-smooth top-20 w-[50rem] h-full py-8 ml-10 bp2:ml-0 mt-16 border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[8%] bg-opacity-[8%] font-orb bp2_1:w-[90%] bp2:w-[45rem]">
      <form className="flex flex-col items-center justify-center mt-4 tracking-wide text-slate-50 dark:text-slate-900">
        <h1 className="text-2xl tracking-wide mb-7 animate-pulse bp2_1:text-center bp2_1:w-[90%] bp2_1:text-xl  ">
          VALIDEZ VOTRE VOYAGE
        </h1>

        {/* FORM CONTAINER */}
        <div className="flex flex-col items-center w-full">
          {/* FirstName & Name */}
          {passengers === "1" && (
            <PassengerName
              setFirstName={setFirstName}
              setLastName={setLastName}
            />
          )}
          {passengers === "2" && (
            <>
              <PassengerName
                setFirstName={setFirstName}
                setLastName={setLastName}
              />
              <PassengerName />
            </>
          )}
          {passengers === "3" && (
            <>
              <PassengerName
                setFirstName={setFirstName}
                setLastName={setLastName}
              />
              <PassengerName />
              <PassengerName />
            </>
          )}
          {passengers === "4" && (
            <>
              <PassengerName
                setFirstName={setFirstName}
                setLastName={setLastName}
              />
              <PassengerName />
              <PassengerName />
              <PassengerName />
            </>
          )}

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
          firstName={firstName}
          lastName={lastName}
          handleCheck={handleCheck}
          openModalRecap={openModalRecap}
          phone={phone}
          email={email}
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
          />
        )}
      </form>
    </div>
  );
};

// ----------PROPTYPES------------------------
ValidationForm.propTypes = {
  passengers: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default ValidationForm;
