import React from "react";
import FilterButton from "./FilterButton";
import filters from "../../../data/filters";

const PlanetsFilters = () => {
  return (
    <div className="h-64 pl-10 w-fit">
      <h1 className="mt-10 text-4xl text-left text-slate-50 font-orb text-shadow-1">
        Filtrer les planètes :
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
        {filters.map((filter) => (
          <FilterButton {...filter} />
        ))}
      </div>
    </div>
  );
};

export default PlanetsFilters;
