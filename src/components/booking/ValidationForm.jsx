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
    <div className=" w-2/4 px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 dark:text-shadow-2 bg-opacity-80 text-slate-50 dark:text-slate-900 box-shadow-1 dark:box-shadow-2">
      <form className="flex flex-col mt-4">
        <h1 className="mb-3 tracking-wide text-center">VALIDEZ VOTRE VOYAGE</h1>

        {/* FORM CONTAINER */}
        <div className="flex flex-col justify-center m-3 bg-lime-50">
          {/* FirstName & Name */}
          <div className="flex ">
            <PassengerName
              setFirstName={setFirstName}
              setLastName={setLastName}
            />
          </div>

          {/* Phone & Mail */}
          <div className="flex">
            <PassengerContact
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
            />
          </div>
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
