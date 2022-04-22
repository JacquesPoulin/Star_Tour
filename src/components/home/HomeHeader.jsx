import React from "react";
import { Link } from "react-scroll";
import Typist from "react-typist";

const HomeHeader = () => {
  return (
    <div className="flex flex-col items-start justify-end w-full h-screen text-left">
      <video
        className="absolute object-cover w-full h-screen -z-10 opacity-90"
        autoPlay
        loop
        muted
      >
        <source src="assets/videos/star-tour-header-vid.mp4" type="video/mp4" />
      </video>
      <Typist avgTypingDelay={70} stdTypingDelay={0}>
        <Typist.Delay ms={1000} />
        <h1 className="pb-10 pl-5 text-6xl font-thin text-slate-50 font-galactic text-shadow-1">
          BIENVENUE CHEZ
          <br />
          <span className="font-thin text-[7.5rem]">STAR TOUR</span>
        </h1>
        <Typist.Backspace count={24} delay={3000} />
        <h1 className="pb-6 pl-5 text-6xl font-bold text-slate-50 font-orb text-shadow-1 ">
          BIENVENUE CHEZ
          <br />
          <span className="font-starjedi text-[7.5rem]">star tour</span>
        </h1>
        <Typist.Delay ms={500} />
        <h2 className="pl-5 text-[2.4rem] text-slate-50  font-orb text-shadow-2 ">
          Là où les rêves prennent leur envol !
        </h2>
      </Typist>
      <Link
        activeClass="active"
        to="homedescription"
        smooth
        duration={1000}
        className="self-center w-16 mt-32 mb-6 sha hover:scale-110"
      >
        <button type="button" href="#homeDesc">
          <img src="assets/images/arrowdown.png" alt="fleche de direction" />
        </button>
      </Link>
    </div>
  );
};

export default HomeHeader;
