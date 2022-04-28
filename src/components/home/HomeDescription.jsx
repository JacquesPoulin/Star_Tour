import React from "react";

const HomeDescription = () => {
  return (
    <div
      id="homedescription"
      className="flex flex-col px-10 py-10 bg-[url('./assets/images/dark_bg.jpg')] bg-cover bg-repeat dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat "
    >
      <h1 className="mt-2 mb-16 text-4xl sm:mb-0 text-slate-50 font-orb">
        Qui sommes-nous ?
      </h1>

      {/* div qui contient les 3 box */}
      <div className="grid grid-cols-[1fr_1fr_1fr] bp2:flex bp2:flex-col gap-24 bp2:gap-0 px-6">
        {/* Box 1 */}
        <div className="col-[1] flex flex-col items-center justify-center text-justify px-5 py-6 border-y-[1px] border-slate-50 bp2:items-center bp2:flex-col">
          <div className="pb-6 text-xl font-thin leading-8 text-slate-50 font-exo">
            <h3 className="pb-4 text-2xl italic text-center font-orb">
              Hello there !
            </h3>
            <p>
              {`Nous sommes l'agence Star Tour, votre agence de voyage spécialisée dans
              les séjours aux quatre coins de la galaxie !`}
            </p>
          </div>
          <img
            src="../assets/images/startourHomeHelloThere.gif"
            alt="hellothere"
            className="mb-4 w-60 rounded-xl box-shadow-1"
          />
        </div>
        {/* Box 2 */}
        <div className=" col-[2] text-xl text-justify leading-8 border-y-[1px] border-slate-50 px-5 py-6 font-thin text-slate-50 font-exo">
          <h3 className="pb-4 text-2xl italic text-center font-orb">
            Notre objectif
          </h3>
          <p>
            {`Vous permettre de vivre un dépaysement total, en vous
            proposant des séjours all-inclusive vers 28 destinations toutes plus
            différentes les unes que les autres, des mondes du noyau jusqu'aux confins de la
            bordure extérieure.`}
          </p>
        </div>
        {/* Box 3 */}
        <div className="col-[3] flex flex-col items-center justify-center text-justify px-5 py-6 border-y-[1px] border-slate-50 bp2:items-center bp2:flex-col">
          <div className="pb-6 text-xl font-thin leading-8 text-slate-50 font-exo">
            <h3 className="pb-4 text-2xl italic text-center font-orb">
              Notre devise
            </h3>
            <p>
              {`Etre à votre écoute, répondre à vos attentes, afin de
              vous proposer le voyage intergalactique de votre vie !`}
            </p>
          </div>
          <img
            src="../assets/images/fun-begins.gif"
            alt="hellothere"
            className="mb-4 w-60 rounded-xl box-shadow-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;
