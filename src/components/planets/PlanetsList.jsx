/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import PlanetCard from "./PlanetCard";
import planets from "../../../data/planets";

const PlanetsList = ({ search, filter }) => {
  const [isList, setIsList] = useState(false);

  const showGrid = () => {
    setIsList(false);
  };

  const showList = () => {
    setIsList(true);
  };

  return (
    // Les deux boutons et la planetslist
    <div className="flex flex-col items-center pt-8 pb-20">
      {/* Les 2 boutons Grille et Liste */}
      <div className="flex justify-end items-center w-[100%] gap-4 pr-36 pb-8 bp3:hidden">
        <p className="text-slate-50 dark:text-slate-900 font-orb text-[1.2rem]">
          Affichage :
        </p>
        <button
          type="button"
          onClick={showGrid}
          className="text-slate-50 border-[1px] border-slate-50 dark:border-slate-900 rounded-lg bg-slate-50 dark:bg-slate-900 dark:bg-opacity-90 bg-opacity-10 box-shadow-1 w-[3.5rem] h-[3.5rem] dark:hover:bg-[rgb(103_158_194)] hover:bg-[rgb(103_158_194)] hover:bg-opacity-40 flex justify-center items-center"
        >
          <img src="./assets/images/grid.png" alt="grid" width="36px" />
        </button>
        <button
          type="button"
          onClick={showList}
          className="text-slate-50 border-[1px] border-slate-50 dark:border-slate-900 rounded-lg bg-slate-50 dark:bg-slate-900 dark:bg-opacity-90 bg-opacity-10 box-shadow-1 w-[3.5rem] h-[3.5rem] dark:hover:bg-[rgb(103_158_194)] hover:bg-[rgb(103_158_194)] hover:bg-opacity-40 flex justify-center items-center"
        >
          <img src="./assets/images/list.png" alt="grid" width="36px" />
        </button>
      </div>
      {/* La planetslist */}
      <div
        className={`flex flex-wrap items-center justify-center bp5:p-0 ${
          isList ? "flex-col gap-6 px-12" : "gap-10"
        }`}
      >
        {planets
          .filter((planet) => planet.biome === filter || !filter)
          .filter((planet) => planet.name.toLowerCase().startsWith(search))
          .map((planet, index) => (
            <PlanetCard key={index} isList={isList} {...planet} />
          ))}
      </div>
    </div>
  );
};

PlanetsList.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default PlanetsList;
