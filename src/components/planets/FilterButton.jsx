/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ id, setFilter }) => {
  FilterButton.propTypes = {
    id: PropTypes.number.isRequired,
    setFilter: PropTypes.func.isRequired,
  };
  return (
    <div
      role="button"
      onClick={() => (id === "Tout afficher" ? setFilter("") : setFilter(id))}
      className="bp2:justify-self-center notFilter hover:filter"
    >
      <p className="text-xl font-light text-center text-slate-50 font-exo">
        {id}
      </p>
    </div>
  );
};

export default FilterButton;
