import React from "react";

const HomeDescription = () => {
  return (
    <div className="flex flex-col mx-10 my-10">
      <h1 className="text-slate 50 font-orb">{`Qui sommes-nous?`}</h1>
    
      
      <div className="flex flex-col my-5 gap-4 justify-center items-center space-x-0 sm:flex-row">
        <p className="text-slate 50 font-exo ">
        {`Hello there !`}
        <br />
        {`
        Nous sommes l'agence Star Tour, votre agence de voyage spécialisée dans
        les séjours aux quatre coins de notre galaxie !
        `}
        </p>
        <img src="../src/assets/logo/startourHomeHelloThere.gif" className="w-80 rounded-xl"/>
      
      </div>
      <p className="text-slate 50 font-exo">
        {`
        Notre objectif : vous permettre de vivre un dépaysement total, en vous
        proposant des séjours all-inclusive vers 28 destinations toutes plus
        différentes les unes que les autres, des mondes du noyau jusqu'à la
        bordure extérieure.
        `}
      </p>
      <br />
      <p className="text-slate 50 font-exo">
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
