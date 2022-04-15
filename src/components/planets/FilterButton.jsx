import React, { useState } from "react";

const FilterButton = ({ item, name }) => {
  const [isFiltered, setisFiltered] = useState(false);
  console.log(isFiltered);
  return (
    <div
      onClick={() => setisFiltered(!isFiltered)}
      className={isFiltered ? "filter" : "notFilter"}
    >
      <p className="text-xl font-light text-center text-slate-50 font-exo">
        {name}
      </p>
    </div>
  );
};

export default FilterButton;
