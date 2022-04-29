/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";

const SubmitForm = ({ isChecked, handleCheck, openModalRecap }) => {
  return (
    <div className="w-full flex flex-col text-center m-auto">
      <label
        htmlFor="acceptedTerms"
        className="mt-20 text-xl tracking-wider text-center"
      >
        <input
          id="acceptedTerms"
          name="useraccepted"
          type="checkbox"
          checked={isChecked}
          onClick={handleCheck}
          className="ml-4 mr-4 rounded-sm focus:border-lime-500"
          required
        />
        J'accepte les termes du contrat *
      </label>

      <button
        type="button"
        className="text-center m-auto mt-14 text-2xl cursor-pointer w-36 hover:scale-110 tracking-wider animate-pulse"
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
