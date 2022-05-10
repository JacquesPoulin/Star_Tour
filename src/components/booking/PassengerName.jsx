import React from "react";
import PropTypes from "prop-types";

const PassengerName = ({ setFirstName, setLastName }) => {
  return (
    <div className="flex w-full gap-4 mt-9 justify-evenly bp4:flex-col">
      {/* USER FIRSTNAME */}

      <label
        htmlFor="firstName"
        className="text-xl tracking-wide ml-14 text-slate-50 dark:text-slate-900 bp5:text-lg bp4:w-full bp3:ml-1 bp2:ml-5"
      >
        Prénom * <br />
        <input
          id="firstName"
          type="text"
          className="cursor-pointer w-auto pl-3 mt-2  text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] tracking-wide bp5:text-lg bp2_1:w-[90%] bp2:ml-1"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      {/* USER LASTNAME */}
      <label
        htmlFor="lastName"
        className="text-xl tracking-wide ml-14 text-slate-50 dark:text-slate-900 bp5:text-lg bp4:w-full bp3:ml-1 bp2:ml-5"
      >
        Nom * <br />
        <input
          id="lastName"
          type="text"
          className="cursor-pointer w-auto pl-3 mt-2  text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] tracking-wide bp5:text-lg bp2_1:w-[90%] bp2:ml-1"
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
