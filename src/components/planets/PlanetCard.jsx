import React from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import { useState } from "react";
import PlaneteModal from "./PlanetModal";

const PlanetCard = ({ id, name, img, desc, weather, visit }) => {
  PlanetCard.propTypes = {
    name: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    img: PropTypes.string.isRequired,
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className="flex items-center justify-center h-40 w-72">
        <img
          src={img}
          className="absolute h-40 w-72 box-shadow-1 rounded-2xl"
          alt={name}
        />
        <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">
          {name}
        </p>
      </button>
      {isModalOpen && <PlaneteModal id={id} name={name} img={img} desc={desc} weather={weather} visit={visit} closeModal={closeModal} />}
    </>

  );
};

export default PlanetCard;
