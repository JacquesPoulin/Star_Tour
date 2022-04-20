import React, { useState } from "react";

const FilterButton = ({ id, name, setFilter }) => {
  return (
    <div
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
