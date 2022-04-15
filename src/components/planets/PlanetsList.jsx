import React from "react";
import PlanetCard from "./PlanetCard";
import planets from "../../../data/planets";

const PlanetsList = ({search, filter}) => {

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-20">
      {console.log(search)}
      {console.log(filter)}
      {planets
      .filter((planet) => (planet.biome === filter) || !filter)
      .filter((planet) => planet.name.toLowerCase().startsWith(search))
      .map((planet) => (<PlanetCard {...planet} />))
      }
    </div>
  );
};

export default PlanetsList;
