import React from "react";

const PlanetsFilter = () => {
  return (
    <div className="w-1/2 h-64 pt-20 pl-20">
      <h1 className="mt-10 text-4xl text-left text-slate-50 font-orb text-shadow-wh">
        Filtrer les planètes :
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 ">
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md w-28 bg-amber-400 font-exo box-shadow-1 "
          type="button"
        >
          Déserts
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md bg-sky-500 w-28 font-exo box-shadow-1 "
          type="button"
        >
          Océans
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md bg-lime-600 w-28 font-exo box-shadow-1 "
          type="button"
        >
          Plaines et Fôrets
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 bg-red-600 rounded-md w-28 font-exo box-shadow-1 "
          type="button"
        >
          Volcans
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md bg-zinc-300 w-28 font-exo box-shadow-1 "
          type="button"
        >
          Neige
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md bg-lime-800 w-28 font-exo box-shadow-1 "
          type="button"
        >
          Marais
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 rounded-md bg-neutral-500 w-28 font-exo box-shadow-1 "
          type="button"
        >
          Astéroïdes
        </button>
        <button
          className="items-center h-16 text-xl text-gray-800 bg-teal-100 rounded-md w-28 font-exo box-shadow-1 "
          type="button"
        >
          Zones Urbaines
        </button>
      </div>
    </div>
  );
};

export default PlanetsFilter;
