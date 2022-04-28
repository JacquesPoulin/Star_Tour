/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import PropTypes from "prop-types";

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

  const HandleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  // ------------------------------------------

  return (
    <div className=" w-2/4 px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1">
      <form className="flex flex-col mt-4">
        <h1 className="text-center mb-3 tracking-wide">VALIDEZ VOTRE VOYAGE</h1>

        {/* FORM CONTAINER */}
        <div className="m-8 flex flex-col justify-center gap-4">
          {/* FirstName & Name */}
          <div className="flex ">
            <label htmlFor="firstName" className="mt-4 tracking-wide">
              Prénom *
              <input
                id="firstName"
                type="text"
                pattern="/^[A-Za-z]+$/i"
                required
                className="w-auto rounded-sm mt-4 focus:border-lime-500
              text-slate-900"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label htmlFor="lastName" className="mt-4 tracking-wide">
              Nom *
              <input
                id="lastName"
                type="text"
                pattern="/^[A-Za-z]+$/i"
                required
                className="w-auto rounded-sm mt-4 focus:border-lime-500
              text-slate-900"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

          {/* Phone & Mail */}
          <div className="flex">
            <label htmlFor="phone" className="mt-4 tracking-wide">
              Téléphone *
              <input
                id="phone"
                type="phone"
                required
                className="w-auto rounded-sm mt-4 focus:border-lime-500
              text-slate-900"
              />
            </label>

            <label htmlFor="mail" className="mt-4 tracking-wide">
              Email *
              <input
                id="mail"
                type="email"
                required
                className="w-auto rounded-sm mt-4 focus:border-lime-500
              text-slate-900"
              />
            </label>
          </div>
        </div>
        <label
          htmlFor="acceptedTerms"
          className="mt-20 text-center tracking-wide"
        >
          <input
            id="acceptedTerms"
            name="useraccepted"
            type="checkbox"
            checked={isChecked}
            onClick={HandleCheckboxClick}
            className="mr-4 rounded-sm focus:border-lime-500"
            required
          />
          J'accepte les termes du contrat *
        </label>

        <button
          type="button"
          className=" w-36 m-auto rounded-sm mt-20 mb-5 hover:scale-110 bg-gray-800 tracking-wide transition-all duration-700 cursor-pointer"
          onClick={openModalRecap}
        >
          Submit
        </button>
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
