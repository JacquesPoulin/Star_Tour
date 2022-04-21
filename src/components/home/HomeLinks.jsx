import React from "react";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <div className="pt-10 pb-28 bg-[url('./assets/images/dark_bg.jpg')] bg-cover bg-repeat dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat">
      <h1 className="pl-10 text-4xl font-orb text-slate-50 dark:text-slate-900">
        Nos services
      </h1>
      <div className="grid w-3/4 h-full grid-cols-2 grid-rows-2 gap-10 mx-auto mt-12">
        {/* Destinations */}
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1 dark:box-shadow-2">
          <Link to="/destination">
            <div className="bg-[url('./assets/images/obiwan.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-slate-50 font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500">
              Découvrez toutes nos destinations !
            </div>
          </Link>
        </div>
        {/* Réservations */}
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1 dark:box-shadow-2">
          <Link to="/booking">
            <div className="bg-[url('./assets/images/obiwan2.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-slate-50 font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500">
              Réservez votre prochain voyage !
            </div>
          </Link>
        </div>
        {/* Vaisseaux */}
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1 dark:box-shadow-2">
          <Link to="/ships">
            <div className="bg-[url('./assets/images/shiplink.png')] bg-cover bg-no-repeat  h-full bg-center flex justify-center items-center text-center text-slate-50 font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500">
              Admirez notre flotte de vaisseaux !
            </div>
          </Link>
        </div>
        {/* Contact */}
        <div className="overflow-hidden h-44 rounded-xl box-shadow-1 dark:box-shadow-2">
          <Link to="/contact">
            <div className="bg-[url('./assets/images/storm.png')] bg-cover bg-no-repeat h-full bg-center flex justify-center items-center text-center text-slate-50 font-exo text-2xl md:text-3xl text-shadow-3 hover:scale-105 transition ease-in-out duration-500">
              Contactez-nous !
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
