import React from "react";
import ShipCard from "./ShipCard";
import ships from "../../../data/ships";

const ShipList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 p-8 pb-20 mt-8">
      {ships.map((ship) => (
        <ShipCard {...ship} />
      ))}
    </div>
  );
};

export default ShipList;
