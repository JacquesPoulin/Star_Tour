/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";

const SubmitForm = ({ isChecked, handleCheck, openModalRecap }) => {
  return (
    <div>
      <label
        htmlFor="acceptedTerms"
        className="mt-20 tracking-wide text-center"
      >
        <input
          id="acceptedTerms"
          name="useraccepted"
          type="checkbox"
          checked={isChecked}
          onClick={handleCheck}
          className="mr-4 rounded-sm focus:border-lime-500"
          required
        />
        J'accepte les termes du contrat *
      </label>

      <button
        type="button"
        className="m-auto mt-20 mb-5 tracking-wide transition-all duration-700 bg-gray-800 rounded-sm cursor-pointer w-36 hover:scale-110"
        onClick={openModalRecap}
      >
        Submit
      </button>
    </div>
  );
};

SubmitForm.propTypes = {
  openModalRecap: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default SubmitForm;
