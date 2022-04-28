/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlanetsSearch = ({ search, handleSearch }) => {
  PlanetsSearch.propTypes = {
    search: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
  };
  return (
    <div className="flex flex-col items-start justify-start p-8 bp2:mt-20 bp4:p-4">
      <h2 className="text-4xl text-slate-50 font-orb bp4:text-2xl">
        Chercher une planète :
      </h2>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="w-[400px] text-2xl bg-slate-50 bg-opacity-[10%] bg-[url(assets/images/loupe.png)] bg-contain bg-no-repeat pl-12 text-slate-50 font-exo p-1 mt-2 rounded-lg border-2 border-slate-50 box-shadow-1 bp4:w-[300px]"
      />
      <Link to="/quiz">
        <button
          type="button"
          className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 dark:border-slate-900 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 dark:text-slate-900 box-shadow-1 dark:box-shadow-2 hover:scale-[1.01]"
        >
          J'hésite encore, aidez-moi !
        </button>
      </Link>
    </div>
  );
};

export default PlanetsSearch;
