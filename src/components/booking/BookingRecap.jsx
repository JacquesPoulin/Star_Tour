import React from "react";

const BookingRecap = () => {
  return (
    <div className="fixed top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[url(assets/images/modal_bg.jpg)] mt-[15%] bg-cover bg-center w-5/6 h-1/2 md:h-4/5 rounded-lg ">
      <div className="flex justify-between border-b-[2px]">
        <h1 className="pt-4 pl-6 text-4xl underline font-exo decoration-2-solid bp2_1:text-2xl">
          Récapitulatif de votre voyage :
        </h1>
        <button
          type="button"
          className="self-end mr-4 text-5xl text-slate-50 text-shadow-3 dark:text-shadow-2 font-orb -mt-52 hover:scale-105 bp2_1:text-2xl"
        >
          X
        </button>
      </div>

      <div className="pt-4 pb-2 pl-6 text-2xl font-exo bp2_1:text-lg">
        Prenom :<br />
        Nom :<br />
        Nombre de personnes :<br />
        Destination :
        <br />
        Départ : <br />
        Retour : <br />
        Transport : <br />
        <br />
      </div>
      <div className="flex justify-end pb-4 pr-6">
        <div className="rounded-lg justify-end font-exo bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover w-1/2 h-20 text-slate-50 text-2xl pl-4 pt-1 bp2_1:text-lg bp2_1:w-4/5">
          MONTANT TOTAL : {Math.floor(Math.random() * 120000)} <br /> CREDIT
          REPUBLICAINS
        </div>
      </div>
    </div>
  );
};

export default BookingRecap;
