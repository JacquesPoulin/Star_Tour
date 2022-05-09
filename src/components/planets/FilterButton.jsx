import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ id, filter, setFilter }) => {
  return (
    <button
      type="button"
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
    </button>
  );
};

FilterButton.propTypes = {
  id: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterButton;
