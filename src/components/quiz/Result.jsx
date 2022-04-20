import React from "react";
// import { Link } from "react-router-dom";

const Result = ({ name, img }) => {
  return (
    <div className=" top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed flex flex-column justify-center w-3/5 rounded-xl box-shadow-1">
      <img
        src={img}
        alt={name}
        className="absolute z-0 h-full rounded-xl box-shadow-1"
      />
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="m-auto mt-10 w-auto rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95">
            <h2 className="p-6 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] font-thin font-orb text-slate-50 text-shadow-3">
              Votre destination <br />
              de prédilection est :
            </h2>
          </div>
          <div className="flex flex-col h-56">
            <h1 className="z-10 m-auto text-6xl font-normal font-orb text-slate-50 text-shadow-4">
              {name}
            </h1>
          </div>
          <div className="flex flex-col justify-center m-auto align-middle mt-11">
            <button
              type="button"
              className="z-10 mb-4 text-lg tracking-wider transition font-orb text-slate-50 text-shadow-3 hover:scale-110 duration-900"
            >
              En savoir plus
            </button>

            <button
              type="button"
              className="z-10 mb-10 text-lg tracking-wider transition font-orb text-slate-50 text-shadow-3 hover:scale-110 duration-900"
            >
              Reserver mon voyage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
