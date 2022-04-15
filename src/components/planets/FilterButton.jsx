import React, { useState } from "react";

const FilterButton = ({ id, name, setFilter}) => {

  return (
    <div
      onClick={() => id === "all" ? setFilter('') : setFilter(id)}
      className="notFilter"
    >
      <p className="text-xl font-light text-center text-slate-50 font-exo">
        {name}
      </p>
    </div>
  );
};

export default FilterButton;
