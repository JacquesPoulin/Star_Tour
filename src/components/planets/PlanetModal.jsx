import React from "react";

const PlaneteModal = () => {
  return (
    <div className="w-3/5 pb-10 m-auto mt-10 bp2:w-4/5">
      {/* Image et titre */}
      <div className="flex flex-col items-center justify-center border-b-2 border-black ">
        <img
          src="assets/images/02-Alderaan.jpg"
          className="w-full h-[270px] object-cover z-[1]"
        />
        <h1 className="absolute text-6xl text-shadow-2 font-orb text-slate-50 z-[2]">
          Alderaan
        </h1>
        <button className="absolute z-10 self-end mr-4 text-5xl text-slate-50 text-shadow-3 font-orb -mt-52">
          X
        </button>
      </div>
      {/* Logo Republique sur fond beige */}
      <div className="z-[3] flex justify-center items-center border-2 border-black rounded-[48px] w-24 h-24 m-auto mt-[-48px] bg-[black]">
        <img
          src="assets/images/republic3.png"
          className="z-[4] w-[100px] h-[82px] mt-[-9.5px]"
        />
      </div>
      {/* Grid de la partie inférieure */}
      <div className="gap-x-20 gap-y-6 p-6 grid bp2:flex bp2:flex-col grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] h-[360px] bp2:h-auto bg-[url(assets/images/modal_bg.jpg)] -mt-12 bg-cover bg-center">
        {/* Description */}
        <div className="col-[1_/_2] row-[1_/_4] rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95">
          <p className="pt-2 pl-6 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] font-thin font-exo text-slate-50 text-shadow-3">
            Description :
          </p>
          <p className="px-6 pt-3 bp2:pb-6 text-lg bp1:text-[1.2vw] bp2:text-[2vw] bp3:text-[2.6vw] bp1:leading-6 font-thin font-exo text-slate-50">
            La planète d’origine de la célèbre famille Organa ! Une planète où
            la douceur de vivre est une réalité, entre plaines verdoyantes,
            montagnes immaculées, et cités modernes où il fait bon vivre !
          </p>
        </div>
        {/* Bouton */}
        <div className="flex justify-center items-center col-[1_/_2] row-[4_/_5] bp2:order-1">
          <button className="font-medium rounded-md border-2 border-black text-2xl bp1:text-[1.5vw] bp2:text-[2.4vw] bp3:text-[4vw] font-exo box-shadow-2 bg-[#679ec2] px-6">
            JE RESERVE MON VOYAGE !
          </button>{" "}
        </div>
        {/* Infos */}
        <div className="flex flex-col justify-center items-start col-[2_/_3] row-[1_/_3] rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover bg-center opacity-95">
          {/* image books */}
          <img
            src="assets/images/books.png"
            className="absolute self-end w-16 h-24 opacity-70"
          />
          {/* Paragraphe infos */}
          <div className="pl-6 font-thin text-slate-50 font-exo">
            <p className="pb-2 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] text-shadow-3 bp2:pt-2">
              Infos pratiques :
            </p>
            <div className="flex items-end justify-start text-lg bp1:text-[1.2vw] bp2:text-[2vw] bp3:text-[2.6vw] bp2:pb-4">
              <p>
                Diamètre : 12500 km
                <br />
                Rotation : 24 h<br />
                Orbite : 364 j<br />
              </p>
              <p className="-ml-7 bp2:ml-4">
                Population : 2000M <br />
                Climat : Tempéré
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* Météo */}
        <div className="col-[2_/_3] row-[3_/_5] rounded-xl box-shadow-2 bg-[url(assets/images/meteo.png),url(assets/images/modal_dark_bg2.jpg)] bg-cover bg-center opacity-95">
          <div className="flex flex-col items-start justify-center pt-2 pl-6 font-thin text-slate-50 font-exo">
            <p className="pb-2 text-xl bp1:text-[1.2vw] bp2:text-[2.8vw] bp3:text-[3.5vw] text-shadow-3">
              Météo / Période de visite conseillée :
            </p>
            <div className="flex items-center justify-center gap-10 pt-1 pl-2 bp1:gap-5">
              <img
                src="assets/images/sun.png"
                className="w-[72px] bp2:w-[7vw] opacity-90 bp2:pb-4"
                alt="meteo"
              />
              <p className="px-4 bp1:px-0 text-3xl bp1:text-[1.8vw] bp2:text-[2.2vw] bp3:text-[3vw] italic text-center text-shadow-3">
                Avril à Juillet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneteModal;
