import React from "react";
import PlanetsTopography from "./PlanetsTopography";
import planetsFilters from "../../../data/planetsFilters";

const PlanetsFilters = () => {
  return (
    <div className="h-64 pl-10 w-fit">
      <h1 className="mt-10 text-4xl text-left text-slate-50 font-orb text-shadow-1">
        Filtrer les planètes :
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
        {planetsFilters.map((planetFilter) => (
          <PlanetsTopography {...planetFilter} />
        ))}
      </div>
    </div>
  );
};

export default PlanetsFilters;
