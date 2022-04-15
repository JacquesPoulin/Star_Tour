import React, { useEffect, useState } from "react";

const FilterButton = ({ id, name, setFilter }) => {

  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  return (
    <div
      onClick={() => id === "all" ? setFilter('') : setFilter(id)}
      className={isClicked ? "filter" : "notFilter"}
    >
      <p className="text-xl font-light text-center text-slate-50 font-exo">
        {name}
      </p>
    </div>
  );
};

export default FilterButton;
