/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ id, filter, setFilter }) => {
  FilterButton.propTypes = {
    id: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };
  return (
    <div
      role="button"
      onClick={() => (id === "Tout afficher" ? setFilter("") : setFilter(id))}
      className={`bp2:justify-self-center dark:border-slate-900 dark:box-shadow-2 ${
        id === filter ? "activeFilter" : "inactiveFilter"
      }`}
    >
      <p
        className={`text-xl font-light text-center text-slate-50 dark:text-slate-900 font-exo ${
          id === filter && "text-[1.35rem]"
        }`}
      >
        {id}
      </p>
    </div>
  );
};

export default FilterButton;
