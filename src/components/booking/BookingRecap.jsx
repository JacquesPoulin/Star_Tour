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
    <div className="fixed w-[100vw] h-[100vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:h-4/5 bg-slate-100 bg-opacity-10 backdrop-blur-[2px] flex justify-center items-center text-slate-50 bp1:h-auto">
      {/* only modal */}
      <div className="w-2/3 h-3/5 modal-bg rounded-xl bg-[url('/assets/images/modal_bg.jpg')] bg-center bg-cover bp2_1:h-auto bp2_1:text-xl bp2:w-5/6 uhd:w-[40%] bp2:h-auto bp4:h-auto ">
        {/* title, client's name and cross to close the modal */}
        <div className="flex justify-between pb-5 mt-2 text-slate-50 bp4:pb-1 bp4:mt-0 ">
          {/* title and client's name */}
          <div className="flex text-wh text-shadow-1 font-exo">
            <h1 className="pt-4 pl-6 text-4xl underline font-exo decoration-2-solid bp2:text-[28px] bp1:text-2xl bp2:pl-5 bp2_1:text-2xl bp4:text-xl bp5:text-base">
              Récapitulatif du séjour pour :
            </h1>
            <h1 className="pt-4 pl-6 text-4xl font-exo decoration-2-solid bp1:text-2xl bp2:text-[28px] bp2_1:text-2xl bp4:pl-3 bp4:text-xl bp5:text-base">
              {firstName} {lastName}
            </h1>
          </div>
          {/* to close modal */}
          <button
            type="button"
            onClick={closeModalRecap}
            className="self-end mr-4 text-5xl text-slate-50 text-shadow-3 dark:text-shadow-2 font-orb -mt-52 hover:scale-105 bp1:text-2xl bp2:text-[28px] bp2_1:pb-0 bp2_1:text-2xl bp3:pb-10 bp4:pb-8 bp4:text-xl bp5:pb-8 bp5:pl-2"
          >
            X
          </button>
        </div>
        <div className="pt-2 pl-2 pr-2 text-[28px] text-center text-wh text-shadow-1 font-exo bp1:text-xl bp1:mt-0 bp2:text-2xl leading-8 bp4:text-[18px] bp4:leading-6 bp4:mt-0 bp4:pb-2 bp5:text-sm ">
          Votre réservation a bien été prise en compte. Vous recevrez sous peu
          un mail de confirmation. Merci pour votre confiance et <br /> que la
          Force soit avec vous !
        </div>
        {/* CLIENT INFORMATIONS */}
        <div className="flex flex-col items-center w-1/2 pb-2 m-auto mt-6 text-3xl text-center border-2 text-shadow-2 font-exo bp2_1:text-[17px] border-slate-50 rounded-xl bg-slate-50 bg-opacity-30 bp1:text-xl bp1:mt-2 backdrop-blur-[4px] box-shadow-2  bp2:text-[20px] bp2:leading-7 bp4:w-3/4 bp4:text-[16px] bp4:leading-5 bp4:mt-0 bp2:w-3/5 bp5:text-sm">
          <p>Nombre de personnes : {passengers} </p>
          <p>Destination : {destination} </p>
          {/* toLocaleString post french date .slice delete hour */}
          <p>
            Du {startDate.toLocaleString("fr-FR").slice(0, 10)} au
            {endDate.toLocaleString("fr-FR").slice(0, 10)} <br />
          </p>
        </div>
        <div className="flex justify-end pt-10 pr-6 bp1:pb-5 bp1:pt-5 bp2:pb-5 bp2_1:pb-5 bp4:pt-4 bp4:pr-2 bp4:pb-3">
          <div className="rounded-lg justify-end font-exo bg-[url('/assets/images/modal_dark_bg2.jpg')] bg-cover w-1/2 h-20 text-slate-50 text-2xl pl-4 pt-1 bp1:text-base bp1:w-56  bp1:h-16 bp2:text-[15px] bp2:leading-5 bp2:h-14 bp2:w-1/3 bp2:pl-2 bp2_1:w-52 bp4:h-14  text-shadow-wh bp4:text-[12px] bp4:w-44 ">
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
