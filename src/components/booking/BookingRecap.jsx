import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BookingRecap = ({ name, destination, ship }) => {
  BookingRecap.prototype = {
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    ship: PropTypes.string.isRequired,
  };

  // const [destination, setDestination] = useState("");
  // const [ship, setShip] = useState("");

  return (
    <div className="relative m-auto bg-[url(assets/images/modal_bg.jpg)] mt-[15%] bg-cover bg-center w-5/6 h-full rounded-lg">
      <div className="flex">
        <h1 className="pt-4 pl-6 text-4xl underline font-exo decoration-2-solid">
          Récapitulatif de votre voyage :
        </h1>
        <img src="bg-[url(assets/logo/star_tour.png)]" alt="logo Star Tour" />
      </div>
      <div className="pt-4 pb-6 pl-6 text-2xl font-exo">
        Nom : <br />
        Nombre de personnes : {Math.floor(Math.random() * 10)} <br />
        Déstination : YAVIN 4 <br />
        Départ : {Math.floor(Math.random() * 20)} BBY <br />
        Durée du séjour : {Math.floor(Math.random() * 20)} jours <br />
        Hébergement : {} <br />
        Transport : {} <br />
      </div>
      <div className="flex justify-end pb-4 pr-6">
        <div className="rounded-lg justify-end font-exo bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover w-1/2 h-20 text-slate-50 text-2xl pl-4 pt-1">
          MONTANT TOTAL : {Math.floor(Math.random() * 120000)} <br /> CREDIT
          REPUBLICAINS
        </div>
      </div>
    </div>
  );
};

export default BookingRecap;
