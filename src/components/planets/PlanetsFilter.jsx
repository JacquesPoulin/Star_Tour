import React from "react";
import FilterButton from "./FilterButton";
import filters from "../../../data/filters";

const PlanetsFilters = ({setFilter}) => { 

  return (
    <div className="h-64 pl-10 bp2:pl-0 w-fit">
      <h1 className="mt-10 text-4xl text-left bp3:text-3xl text-slate-50 font-orb text-shadow-1">
        Filtrer les planètes :
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 bp2:grid-cols-3 bp2:grid-rows-3">
        {filters
        .map((filter) => (<FilterButton setFilter={setFilter} {...filter} />))
        }
      </div>
    </div>
  );
};

export default PlanetsFilters;
