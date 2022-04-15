import React, { useState } from "react";
import PlanetCard from "./PlanetCard";
import planets from "../../../data/planets";

const PlanetsList = ({search, filter}) => {

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-20">
      {planets
      .filter((planet) => (planet.biome === filter) || !filter)
      .filter((planet) => planet.name.toLowerCase().startsWith(search))
      .map((planet, index) => (<PlanetCard {...planet} />))
      }
    </div>
  );
};

export default PlanetsList;
