/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import PropTypes from "prop-types";
import PlaneteModal from "./PlanetModal";

const PlanetCard = ({ id, name, img, desc, weather, visit }) => {
  PlanetCard.propTypes = {
    id: PropTypes.number.isRequired,
  };
  PlanetCard.propTypes = {
    name: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    img: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    desc: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    weather: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    visit: PropTypes.string.isRequired,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-hidden box-shadow-1 rounded-2xl">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center h-40 transition duration-500 ease-in-out w-72 hover:scale-[1.03]"
        >
          <img
            src={img}
            className="absolute h-40 w-72 rounded-2xl"
            alt={name}
          />
          <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">
            {name}
          </p>
        </button>
      </div>
      {isModalOpen && (
        <PlaneteModal
          id={id}
          name={name}
          img={img}
          desc={desc}
          weather={weather}
          visit={visit}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default PlanetCard;
