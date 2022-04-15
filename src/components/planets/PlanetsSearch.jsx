import React from "react";
import { Link } from "react-router-dom";

const PlanetsSearch = ({search, handleSearch}) => {
  return (
    <div className="flex flex-col items-start justify-start p-8 bp2:mt-20">
      <h2 className="text-4xl text-slate-50 font-orb">Chercher une planète :</h2>
      <input type="text" value={search} onChange={handleSearch} className="w-[400px] text-2xl bg-slate-50 bg-opacity-[10%] bg-[url(assets/images/loupe.png)] bg-contain bg-no-repeat pl-12 text-slate-50 font-exo p-1 mt-2 rounded-lg border-2 border-slate-50 box-shadow-1" />
      <Link to="/quiz">
        <button className="px-4 py-1 mt-12 text-2xl bg-[#679ec2] border-[2px] border-slate-50 rounded-lg font-orb text-shadow-3 bg-opacity-80 text-slate-50 box-shadow-1 hover:scale-[1.01]">J'hésite encore, aidez-moi !</button>
      </Link>
    </div>
  );
};

export default PlanetsSearch;
