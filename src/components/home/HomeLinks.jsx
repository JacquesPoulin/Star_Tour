import React from "react";

const HomeLinks = () => {
  return (
    <div>
      <h1 className="text-4xl font-orb">Nos services</h1>
      <div className="grid w-3/4 h-full grid-cols-2 grid-rows-2 gap-8 mx-auto mt-12">
        <NavLink to="/Destinations">
          <a
            href="/src/pages/Booking"
            className="bg-[url('./assets/obione.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl shadow-2xl"
          >
            Découvrez toutes nos destinations !
          </a>
        </NavLink>
        <NavLink to="/Reservation">
          <a
            href="./src/pages/Planets"
            className="bg-[url('./assets/obione1.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
          >
            Réservez votre prochain voyage !
          </a>
        </NavLink>

        <NavLink to="/Vaisseaux">
          <a
            href="/src/pages/Ships"
            className="bg-[url('./assets/shiplink.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
          >
            Admirez notre flotte de vaisseaux !
          </a>
        </NavLink>

        <NavLink to="/Contact">
          <a
            className="bg-[url('./assets/storm.png')] bg-cover bg-no-repeat h-44 bg-center flex justify-center items-center text-center text-white font-exo text-2xl rounded-xl"
            href="/src/pages/Contact"
          >
            Contactez-nous !
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeLinks;
