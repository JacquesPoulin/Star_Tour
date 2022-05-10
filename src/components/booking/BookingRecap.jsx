import React from "react";
import PropTypes from "prop-types";

const BookingRecap = ({
  firstName,
  lastName,
  passengers,
  destination,
  startDate,
  endDate,
  closeModalRecap,
}) => {
  return (
    // Modal and background blur
    <div className="fixed w-[100vw] h-[100vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:h-4/5 bg-slate-100 bg-opacity-10 backdrop-blur-[2px] flex justify-center items-center">
      {/* only modal */}
      <div className="w-2/3 h-3/5 modal-bg rounded-xl bg-[url('/assets/images/modal_bg.jpg')] bg-center bg-cover">
        <div className="flex justify-between pb-5 mt-2">
          <div className="flex text-wh text-shadow-1 font-exo">
            <h1 className="pt-4 pl-6 text-4xl underline font-exo decoration-2-solid bp2_1:text-2xl ">
              Récapitulatif du séjour pour :
            </h1>
            <h1 className="pt-4 pl-6 text-4xl font-exo decoration-2-solid bp2_1:text-2xl">
              {firstName} {lastName}
            </h1>
          </div>
          {/* Crois qui va permettre de fermer la modal */}
          <button
            type="button"
            onClick={closeModalRecap}
            className="self-end mr-4 text-5xl text-slate-50 text-shadow-3 dark:text-shadow-2 font-orb -mt-52 hover:scale-105 bp2_1:text-2xl"
          >
            X
          </button>
        </div>
        <div className="pt-2 pl-2 pr-2 text-[28px] text-center text-wh text-shadow-1 font-exo leading-8">
          Votre réservation a bien été prise en compte. Vous recevrez sous peu
          un mail de confirmation. Merci pour votre confiance et <br /> que la
          Force soit avec vous !
        </div>
        {/* CLIENT INFORMATIONS */}
        <div className="flex flex-col items-center w-1/2 pb-2 m-auto mt-6 text-3xl text-center border-2 text-shadow-2 font-exo bp2_1:text-lg border-slate-50 rounded-xl bg-slate-50 bg-opacity-30 backdrop-blur-[4px] box-shadow-2">
          <p>Nombre de personnes : {passengers} </p>
          <p>Destination : {destination} </p>
          {/* le toLocaleString permert d'afficher la date en version fr et le .slice supprime l'heure qui s'affichait en même temps */}
          <p>
            Du {startDate.toLocaleString("fr-FR").slice(0, 10)} au
            {endDate.toLocaleString("fr-FR").slice(0, 10)} <br />
          </p>
          {/* <p>Transport :</p> */}
        </div>
        <div className="flex justify-end pt-10 pr-6">
          <div className="rounded-lg justify-end font-exo bg-[url('/assets/images/modal_dark_bg2.jpg')] bg-cover w-1/2 h-20 text-slate-50 text-2xl pl-4 pt-1 bp2_1:text-lg bp2_1:w-4/5 text-shadow-wh">
            MONTANT TOTAL : {Math.floor(Math.random() * 120000)} <br /> CREDITS
            REPUBLICAINS
          </div>
        </div>
      </div>
    </div>
  );
};

BookingRecap.propTypes = {
  closeModalRecap: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  passengers: PropTypes.number.isRequired,
  destination: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};

export default BookingRecap;
