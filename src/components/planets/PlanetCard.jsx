import React from "react";
import PropTypes from "prop-types";

const PlanetCard = ({ name, img }) => {
  PlanetCard.propTypes = {
    name: PropTypes.string.isRequired,
  };
  PlanetCard.propTypes = {
    img: PropTypes.string.isRequired,
  };
  return (
    <button
      type="button"
      className="w-full h-full text-3xl text-center text-slate-50 font-exo text-shadow-3"
    >
      <img
        src={img}
        className="absolute h-40 w-72 box-shadow-1 rounded-2xl"
        alt={name}
      />
      <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">
        {name}
      </p>
    </button>
  );
};

export default PlanetCard;
