import React from "react";
import PlanetCard from "../../components/planets/PlanetCard";
import planets from "../../../data/planets"

const PlanetsList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-20 mt-10">
      {planets.map((planet) => (<PlanetCard {...planet} />))
      }
    </div>
  )
};

export default PlanetsList;