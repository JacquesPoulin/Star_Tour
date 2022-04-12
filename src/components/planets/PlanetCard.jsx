import React from "react";

const PlanetCard = ({name, img}) => {
  return (
    <div className="flex items-center justify-center h-40 w-72">
      <img src={img} className="absolute h-40 w-72 box-shadow-1 rounded-2xl" />
      <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">{name}</p>
    </div>
  );
};

export default PlanetCard;
