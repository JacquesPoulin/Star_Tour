import React from "react";
import { Link } from "react-scroll";
import Typist from "react-typist";

const HomeHeader = () => {
  return (
    <div className="flex flex-col items-start justify-end w-full h-screen text-left bp2:justify-center">
      <video
        className="absolute object-cover w-full h-screen -z-10 opacity-90"
        autoPlay
        loop
        muted
        playsinline
      >
        <source
          src="./assets/videos/star-tour-header-vid.mp4"
          type="video/mp4"
        />
      </video>
      {/* Typist en mode PC */}
      <Typist avgTypingDelay={70} stdTypingDelay={0} cursor={{ show: false }}>
        <Typist.Delay ms={1000} />
        <h1 className="bp2:hidden pb-10 pl-5 uhd:pl-20 text-6xl font-thin bp1:text-[2.8rem] uhd:text-8xl text-slate-50 font-galactic text-shadow-1">
          BIENVENUE CHEZ
          <br />
          <span className="font-thin text-[7.5rem] bp1:text-[6rem] uhd:text-[11rem]">
            STAR TOUR
          </span>
        </h1>
        <Typist.Backspace count={24} delay={3000} />
        <h1 className="bp2:hidden pb-6 pl-5 uhd:pl-20 text-6xl font-bold bp1:text-[2.8rem] uhd:text-8xl text-slate-50 font-orb text-shadow-1">
          BIENVENUE CHEZ
          <br />
          <span className="font-extrabold text-[7.5rem] bp1:text-[6rem] uhd:text-[11rem]">
            STAR TOUR
          </span>
        </h1>
        <Typist.Delay ms={500} />
        <h2 className="bp2:hidden pl-5 uhd:pl-20 text-[2.4rem] bp1:text-[2rem] bp2:text-[1.6rem] bp3:text-[1.4rem] bp3:pt-2 uhd:text-[4rem] text-white font-orb text-shadow-2">
          Là où les rêves prennent leur envol !
        </h2>
      </Typist>
      {/* Typist en mode Mobile */}
      <Typist avgTypingDelay={70} stdTypingDelay={0} cursor={{ show: false }}>
        <Typist.Delay ms={1000} />
        <h1 className="bp2inv:hidden pb-6 pl-5 uhd:pl-20 text-6xl font-bold bp1:text-[2.8rem] bp2:text-[2.6rem] bp3:text-[1.6rem] uhd:text-8xl text-slate-50 font-orb text-shadow-1">
          BIENVENUE CHEZ
          <br />
          <span className="font-extrabold text-[7.5rem] bp1:text-[6rem] bp2:text-[5rem] bp3:text-[3.2rem] uhd:text-[11rem]">
            STAR TOUR
          </span>
        </h1>
        <Typist.Delay ms={500} />
        <h2 className="bp2inv:hidden pl-5 uhd:pl-20 text-[2.4rem] bp1:text-[2rem] bp2:text-[1.6rem] bp3:text-[1.4rem] bp3:pt-2 uhd:text-[4rem] text-white font-orb text-shadow-2">
          Là où les rêves prennent leur envol !
        </h2>
      </Typist>
      <Link
        activeClass="active"
        to="homedescription"
        smooth
        duration={1000}
        className="self-center w-16 mt-[15vh] bp1:mt-[10vh] uhd:mt-[30vh] mb-6 bp2:hidden hover:scale-110"
      >
        <button type="button" href="#homeDesc">
          <img src="./assets/images/arrowdown.png" alt="fleche de direction" />
        </button>
      </Link>
    </div>
  );
};

export default HomeHeader;
