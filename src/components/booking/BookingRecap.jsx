import React from "react";
// import PropTypes from "prop-types";

const BookingRecap = () => {
  // const [destination, setDestination] = useState("");
  // const [ship, setShip] = useState("");

  return (
    <div className="fixed top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[url(assets/images/modal_bg.jpg)] mt-[15%] bg-cover bg-center w-5/6 h-1/2 md:h-4/5 rounded-lg ">
      <div className="flex justify-between border-b-[2px]">
        <h1 className="pt-4 pl-6 text-4xl underline font-exo decoration-2-solid bp2_1:text-2xl">
          Récapitulatif de votre voyage :
        </h1>
        <button
          type="button"
          className="self-end mr-4 text-5xl text-slate-50 text-shadow-3 font-orb -mt-52 hover:scale-105 bp2_1:text-2xl"
        >
          X
        </button>
      </div>
      {/* Client informations */}
      <div className="pt-4 pb-2 pl-6 text-2xl font-exo bp2_1:text-lg">
        Nom : PLUVINAGE <br />
        Nombre de personnes : {Math.floor(Math.random() * 10)} <br />
        Destination : YAVIN 4<br />
        Départ : {Math.floor(Math.random() * 20)} BBY <br />
        Durée du séjour : {Math.floor(Math.random() * 20)} jours <br />
        Hébergement : Hotel de luxe <br />
        Transport : Croiseur MC80 <br />
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

// BookingRecap.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };
export default BookingRecap;
