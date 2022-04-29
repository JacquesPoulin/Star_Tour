import React from "react";
import PropTypes from "prop-types";

const PassengerContact = ({ phone, setPhone, email, setEmail }) => {
  return (
    <div>
      <label htmlFor="phone" className=" w-32 mt-6 tracking-wide">
        Téléphone *
        <input
          id="phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-auto mt-4 rounded-sm focus:border-lime-500 text-slate-900"
        />
      </label>

      <label htmlFor="mail" className="mt-4 tracking-wide">
        Email *
        <input
          id="mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-auto mt-4 rounded-sm focus:border-lime-500 text-slate-900"
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
