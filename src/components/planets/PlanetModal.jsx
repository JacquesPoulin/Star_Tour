import React from "react";

const PlaneteModal = () => {
  return (
    <div className="w-3/5 m-auto mt-10">
      <div className="border-b-2 border-black flex justify-center items-center text-shadow-2 font-orb text-slate-50 text-6xl bg-[url(assets/images/02-Alderaan.jpg)] h-[270px] bg-cover bg-center">
        Alderaan
      </div>
      <div className=" flex justify-center items-center border-2 border-black rounded-[48px] w-24 h-24 m-auto -mt-12 bg-[#cabcb9]">
        <img src="assets/images/republic.png" className="w-[74px] h-[74px]" />
      </div>
      <div className="w-24 -mt-12 rounded-b-[48px] h-12 m-auto bg-[#c3b6b3]"></div>
      <div className="gap-x-20 gap-y-6 p-6 grid grid-cols-[1fr 1fr] grid-rows-[1fr 1fr 1fr 1fr] h-[360px] bg-[url(assets/images/modal_bg.jpg)] -mt-12 bg-cover bg-center">
        <div className="col-[1_/_2] row-[1_/_4] rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95"></div>
        <div className="col-[1_/_2] row-[4_/_5] border-2 border-black"></div>
        <div className="col-[2_/_3] row-[1_/_3] rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95"></div>
        <div className="col-[2_/_3] row-[3_/_5] rounded-xl box-shadow-2 bg-[url(assets/images/modal_dark_bg2.jpg)] bg-cover opacity-95"></div>
      </div>
    </div>
  );
};

export default PlaneteModal;
