import React from "react";

const HomeDescription = () => {
  return (
    <div
      id="homedescription"
      className="flex flex-col px-10 py-10 bg-[url('./assets/images/dark_bg.jpg')] bg-cover bg-repeat"
    >
      <h1 className="mb-10 text-4xl sm:mb-0 text-slate-50 font-orb">
        Qui sommes-nous ?
      </h1>

      <div className="flex flex-row items-end justify-between gap-4 mb-10 mr-10 space-x-0 bp2:items-center bp2:flex-col">
        <p className="text-xl font-thin text-slate-50 font-exo">
          Hello there !
          <br />
          {`
        Nous sommes l'agence Star Tour, votre agence de voyage spécialisée dans
        les séjours aux quatre coins de notre galaxie !
        `}
        </p>
        <img
          src="../assets/images/startourHomeHelloThere.gif"
          alt="hellothere"
          className="w-60 rounded-xl box-shadow-1"
        />
      </div>
      <p className="text-xl font-thin text-slate-50 font-exo">
        {`
        Notre objectif : vous permettre de vivre un dépaysement total, en vous
        proposant des séjours all-inclusive vers 28 destinations toutes plus
        différentes les unes que les autres, des mondes du noyau jusqu'aux confins de la
        bordure extérieure.
        `}
      </p>
      <br />
      <p className="text-xl font-thin text-slate-50 font-exo">
        {`
        Notre devise : être à votre écoute, répondre à vos attentes, afin de
        vous proposer le voyage intergalactique de votre vie !
        `}
      </p>
      <br />
    </div>
  );
};

export default HomeDescription;
