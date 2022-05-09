import React from "react";
import PropTypes from "prop-types";
import FilterButton from "./FilterButton";
import filters from "../../../data/filters";

const PlanetsFilters = ({ filter, setFilter }) => {
  PlanetsFilters.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };
  return (
    <div className="h-64 pl-10 bp2:pl-0">
      <h1 className="mt-10 text-4xl text-left bp2:px-6 bp2:text-center bp3:text-2xl text-slate-50 dark:text-slate-900 dark:text-shadow-2 font-orb text-shadow-1">
        Filtrer les planètes :{" "}
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 bp3:gap-1 bp3:grid-cols-3 bp3:grid-rows-3">
        {filters.map((filterBut) => (
          <FilterButton
            key={filterBut.item}
            filter={filter}
            setFilter={setFilter}
            {...filterBut}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanetsFilters;
