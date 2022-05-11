import React from "react";

const HomeDescription = () => {
  return (
    <div
      id="homedescription"
      className="flex flex-col px-10 py-10 bp3:px-0 bg_nightsky dark:bg_lightsky"
    >
      <h1 className="mt-2 mb-16 text-4xl text-center bp3:mx-2 text-slate-50 dark:text-slate-900 font-orb">
        Qui sommes-nous ?
      </h1>

      {/* div qui contient les 3 box */}
      <div className="grid grid-cols-[1fr_1fr_1fr] bp2:flex bp2:flex-col gap-24 bp1:gap-10 bp2:gap-0 px-6">
        {/* Box 1 */}
        <div className="col-[1] flex flex-col items-center justify-center text-justify px-5 py-6 border-t-[1px] bp3:border-t-0 border-b-[1px] border-slate-50 dark:border-slate-900 bp2:items-center bp2:flex-col">
          <div className="pb-6 text-xl font-thin leading-8 text-slate-50 dark:text-slate-900 font-exo">
            <h3 className="pb-4 text-2xl italic text-center font-orb">
              Hello there !
            </h3>
            <p>
              Nous sommes l&apos;agence Star Tour, votre agence de voyage
              spécialisée dans les séjours aux quatre coins de la galaxie !
            </p>
          </div>
          <img
            src="./assets/images/startourHomeHelloThere.gif"
            alt="hellothere"
            className="mb-4 w-60 rounded-xl box-shadow-1"
          />
        </div>
        {/* Box 2 */}
        <div className=" col-[2] text-xl text-justify leading-8 border-y-[1px] border-slate-50 dark:border-slate-900 px-5 py-6 font-thin text-slate-50 dark:text-slate-900 font-exo">
          <h3 className="pb-4 text-2xl italic text-center font-orb">
            Notre objectif
          </h3>
          <p>
            Vous permettre de vivre un dépaysement total, en vous proposant des
            séjours all-inclusive vers 28 destinations toutes plus différentes
            les unes que les autres, des mondes du noyau jusqu&apos;aux confins
            de la bordure extérieure.
          </p>
        </div>
        {/* Box 3 */}
        <div className="col-[3] flex flex-col items-center justify-center text-justify px-5 py-6 border-t-[1px] border-b-[1px] bp3:border-b-0 border-slate-50 dark:border-slate-900 bp2:items-center bp2:flex-col">
          <div className="pb-6 text-xl font-thin leading-8 text-slate-50 dark:text-slate-900 font-exo">
            <h3 className="pb-4 text-2xl italic text-center font-orb">
              Notre devise
            </h3>
            <p>
              Etre à votre écoute, répondre à vos attentes, afin de vous
              proposer le voyage intergalactique de votre vie !
            </p>
          </div>
          <img
            src="./assets/images/fun-begins.gif"
            alt="hellothere"
            className="mb-4 w-60 rounded-xl box-shadow-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;
