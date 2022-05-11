import React from "react";
import PropTypes from "prop-types";

const PassengerContact = ({ phone, setPhone, email, setEmail }) => {
  return (
    <div className="flex w-full gap-4 mt-9 justify-evenly bp4:flex-col">
      {/* USER PHONE */}
      <label
        htmlFor="phone"
        className="text-xl tracking-wide ml-14 text-slate-50 dark:text-slate-900 bp5:text-lg bp4:w-full bp3:ml-1 bp2:ml-5"
      >
        Téléphone * <br />
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="cursor-pointer w-auto pl-3 mt-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] tracking-wide bp5:text-lg bp2_1:w-[90%] bp2:ml-1"
        />
      </label>

      {/* USER EMAIL */}
      <label
        htmlFor="mail"
        className="text-xl tracking-wide ml-14 text-slate-50 dark:text-slate-900 bp5:text-lg bp4:w-full bp3:ml-1 bp2:ml-5"
      >
        Email * <br />
        <input
          id="mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="cursor-pointer w-auto pl-3 mt-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 dark:border-slate-900  appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] tracking-wide bp5:text-lg bp2_1:w-[90%] bp2:ml-1"
        />
      </label>
    </div>
  );
};

// ----------PROPTYPES------------------------
PassengerContact.propTypes = {
  setPhone: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PassengerContact;
