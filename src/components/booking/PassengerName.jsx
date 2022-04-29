import React from "react";
import PropTypes from "prop-types";

const PassengerName = ({ setFirstName, setLastName }) => {
  return (
    <div>
      <label htmlFor="firstName" className="mt-4 tracking-wide">
        Prénom *
        <input
          id="firstName"
          type="text"
          pattern="/^[A-Za-z]+$/i"
          required
          className="w-auto mt-4 rounded-sm focus:border-lime-500 text-slate-900"
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
          className="w-auto mt-4 rounded-sm focus:border-lime-500 text-slate-900"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
    </div>
  );
};

PassengerName.propTypes = {
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
};

export default PassengerName;
