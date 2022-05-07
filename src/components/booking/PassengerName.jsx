import React from "react";
import PropTypes from "prop-types";

const PassengerName = ({ setFirstName, setLastName }) => {
  return (
    <div className="flex w-full gap-4 mt-9 justify-evenly">
      {/* USER FIRSTNAME */}

      <label
        htmlFor="firstName"
        className="w-auto m-auto ml-10 text-xl tracking-wide text-slate-50 dark:text-slate-900 "
      >
        Prénom * <br />
        <input
          id="firstName"
          type="text"
          className="cursor-pointer w-auto pl-3 mt-2 ml-10 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      {/* USER LASTNAME */}
      <label
        htmlFor="lastName"
        className="w-auto m-auto text-xl tracking-wide ml-14 text-slate-50 dark:text-slate-900"
      >
        Nom * <br />
        <input
          id="lastName"
          type="text"
          className="cursor-pointer w-auto pl-3 mt-2 ml-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900 appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
    </div>
  );
};

// ----------PROPTYPES------------------------
PassengerName.propTypes = {
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
};

export default PassengerName;
