import React from "react";
import PropTypes from "prop-types";

const PassengerContact = ({ phone, setPhone, email, setEmail }) => {
  return (
    <div className="mt-9  w-full flex justify-evenly">
      <label htmlFor="phone" className=" m-auto w-auto tracking-wide text-xl">
        Téléphone * <br />
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="cursor-pointer w-auto pl-3 ml-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
        />
      </label>

      <label htmlFor="mail" className="m-auto w-auto tracking-wide text-xl">
        Email * <br />
        <input
          id="mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="cursor-pointer w-auto pl-3 ml-2 text-xl font-exo text-slate-50 dark:text-slate-900 bg-transparent border-0 border-b-4 border-l-4 border-slate-50 appearance-none focus:outline-none focus:ring-0 focus:border-[#7ad563] bp2_1:w-full tracking-wide"
        />
      </label>
    </div>
  );
};

PassengerContact.propTypes = {
  setPhone: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PassengerContact;
