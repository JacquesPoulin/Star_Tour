import React from "react";
import PropTypes from "prop-types";

const SubmitForm = ({ isChecked, handleCheck, openModalRecap }) => {
  return (
    <div className="flex flex-col w-full m-auto text-center">
      <label
        htmlFor="acceptedTerms"
        className="mt-20 text-xl tracking-wider text-center cursor-pointer text-slate-50 dark:text-slate-900"
      >
        <input
          id="acceptedTerms"
          name="useraccepted"
          type="checkbox"
          checked={isChecked}
          onClick={handleCheck}
          className="ml-4 mr-4 rounded-sm cursor-pointer focus:border-lime-500"
          required
        />
        J&apos;accepte les termes du
        <u className="ml-1 underline-offset-4">contrat</u> *
      </label>

      <button
        type="submit"
        className="w-auto m-auto text-2xl tracking-wider cursor-pointer first-line:text-center mt-14 hover:scale-110 animate-pulse"
        onClick={openModalRecap}
      >
        RESERVEZ
      </button>
    </div>
  );
};

// ----------PROPTYPES------------------------
SubmitForm.propTypes = {
  openModalRecap: PropTypes.func.isRequired,
  isChecked: PropTypes.string.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default SubmitForm;
