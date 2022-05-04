import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PlanetModal from "../planets/PlanetModal";

const Result = ({ name, img, id, desc, weather, visit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[100vh] w-[100vw] bg_nightsky dark:bg_lightsky">
      <div className=" top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] fixed flex flex-column justify-center w-3/5 uhd:w-2/5 bp3:w-4/5 rounded-xl box-shadow-1 dark:box-shadow-2">
        <img
          src={img}
          alt={name}
          className="absolute z-0 object-cover w-full h-full rounded-xl box-shadow-1 dark:box-shadow-2"
        />
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <div className="m-auto mt-10 bp2:mt-2 w-auto rounded-xl box-shadow-2 bg-[url('/assets/images/modal_dark_bg2.jpg')] bg-cover opacity-95">
              <h2 className="p-6 bp2:px-4 bp2:py-2 text-2xl bp1:text-[2vw] bp3:text-[3vw] bp2:leading-5 font-thin font-orb text-slate-50 text-shadow-3">
                Votre destination <br />
                de prédilection est :
              </h2>
            </div>
            <div className="flex flex-col h-40 bp2:h-20">
              <h1 className="z-10 m-auto text-6xl font-normal bp2:text-5xl bp3:text-4xl font-orb text-slate-50 text-shadow-4">
                {name}
              </h1>
            </div>
            <div className="flex flex-col justify-center m-auto align-middle mt-11 bp2:mt-2">
              <button
                type="button"
                className="z-10 mb-4 text-lg tracking-wider transition bp3:text-base font-orb text-slate-50 text-shadow-3 hover:scale-110 duration-900"
                onClick={openModal}
              >
                En savoir plus
              </button>

              <Link to="/booking" className="z-20">
                <button
                  type="button"
                  className="z-10 mb-10 text-lg tracking-wider transition bp3:text-base bp2:mb-4 font-orb text-slate-50 text-shadow-3 hover:scale-110 duration-900"
                >
                  Reserver mon voyage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <PlanetModal
          id={id}
          name={name}
          img={img}
          desc={desc}
          weather={weather}
          visit={visit}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

Result.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  visit: PropTypes.string.isRequired,
};
Result.propTypes = {
  desc: PropTypes.string.isRequired,
};
Result.propTypes = {
  weather: PropTypes.string.isRequired,
};
Result.propTypes = {
  visit: PropTypes.string.isRequired,
};
Result.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Result;
