import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/5 h-3/5 m-auto bg-[url('../../../assets/images/planets/09-Coruscant.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="m-auto mt-10 w-auto rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95">
            <h2 className="p-6 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] font-thin font-orb text-slate-50 text-shadow-3">
              Votre destination <br />
              de prédilection est :
            </h2>
          </div>
          <div className="flex flex-col h-56">
            <h1 className="font-orb font-normal m-auto text-slate-50 text-6xl text-shadow-4 ">
              CORUSCANT
            </h1>
          </div>
          <div className="flex flex-col justify-center align-middle m-auto mt-11">
            <button
              type="button"
              className=" font-orb text-lg tracking-wider text-slate-50 text-shadow-3 mb-4 hover:scale-110 transition duration-900"
            >
              En savoir plus
            </button>
            <Link to="/booking">
              <button
                type="button"
                className=" font-orb text-lg tracking-wider text-slate-50 text-shadow-3 hover:scale-110 transition duration-900"
              >
                Reserver mon voyage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
