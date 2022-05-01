import React from "react";
import PropTypes from "prop-types";

const PassengerName = ({ setFirstName, setLastName }) => {
  return (
    <div className="mt-9 gap-4 w-full flex justify-evenly">
      <label
        htmlFor="firstName"
        className="m-auto ml-10 w-auto text-xl tracking-wide"
      >
        Prénom * <br />
        <input
          id="firstName"
          type="text"
          pattern="/^[A-Za-z]+$/i"
          required
          className="cursor-pointer w-auto pl-3 mt-2 ml-10 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <label
        htmlFor="lastName"
        className="m-auto ml-14 w-auto text-xl tracking-wide"
      >
        Nom * <br />
        <input
          id="lastName"
          type="text"
          pattern="/^[A-Za-z]+$/i"
          required
          className="cursor-pointer w-auto pl-3 mt-2 ml-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
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
