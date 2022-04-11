import React from "react";
import { NavLink } from "react-router-dom";

const HomeLinks = () => {
  return (
    <div>
      <h1 className="text-4xl font-orb">Nos services</h1>
      <div className="grid w-3/4 h-full grid-cols-2 grid-rows-2 gap-8 mx-auto mt-12">
        <NavLink to="/Destinations">
          <button
            type="button"
            className="bg-[url('./assets/obione.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl shadow-2xl"
          >
            Découvrez toutes nos destinations !
          </button>
        </NavLink>
        <NavLink to="/Reservation">
          <button
            type="button"
            className="bg-[url('./assets/obione1.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
          >
            Réservez votre prochain voyage !
          </button>
        </NavLink>

        <NavLink to="/Vaisseaux">
          <button
            type="button"
            className="bg-[url('./assets/shiplink.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
          >
            Admirez notre flotte de vaisseaux !
          </button>
        </NavLink>

        <NavLink to="/Contact">
          <button
            type="button"
            className="bg-[url('./assets/storm.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
          >
            Contactez-nous !
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeLinks;
