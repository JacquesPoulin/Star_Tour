import React from "react";

const HomeHeader = () => {
  return (
    <div className="flex flex-col items-start justify-end w-full h-screen text-left">
      <video className="absolute object-cover w-full h-screen -z-10 opacity-90" autoPlay loop muted>
        <source src="src/assets/videos/SW3_2bis.mp4" type="video/mp4" />
      </video>
      <h1 className="pb-10 pl-5 text-6xl font-bold text-white font-orb">BIENVENUE CHEZ <br></br><span className="font-bold text-8xl">STAR TOUR</span></h1>
      <h2 className="pl-5 text-5xl text-white font-orb">Là où les rêves prennent leur envol !</h2>
      <a href="" className="self-center w-16 mt-32 mb-6 sha hover:scale-110"><img src="src/assets/images/arrowdown.png"/></a>
    </div>
  );
};

export default HomeHeader;
