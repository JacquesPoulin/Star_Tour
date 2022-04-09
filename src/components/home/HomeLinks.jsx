import React from "react";

const HomeLinks = () => {
  return (
    <div className="pt-10 pb-28 bg-[url('./assets/images/dark_bg.jpg')] bg-cover bg-repeat">
      <h1 className="pl-10 text-4xl font-orb text-slate-50">Nos services</h1>
      <div className="grid w-3/4 h-full grid-cols-2 grid-rows-2 gap-10 mx-auto mt-12">
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1">
          <a
            href="/src/pages/Booking"
            className="bg-[url('./assets/images/obiwan.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-white font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500"
          >
            Découvrez toutes nos destinations !
          </a>
        </div>
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1">
          <a
            href="/src/pages/Booking"
            className="bg-[url('./assets/images/obiwan2.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-white font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500"
          >
            Réservez votre prochain voyage !
          </a>
        </div>
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1">
          <a
            href="/src/pages/Booking"
            className="bg-[url('./assets/images/shiplink.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-white font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500"
          >
            Admirez notre flotte de vaisseaux !
          </a>
        </div>
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1">
          <a
            href="/src/pages/Booking"
            className="bg-[url('./assets/images/storm.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-white font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500"
          >
            Contactez-nous !
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
