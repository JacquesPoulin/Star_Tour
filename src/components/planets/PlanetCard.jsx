/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import PropTypes from "prop-types";
import PlaneteModal from "./PlanetModal";

const PlanetCard = ({ id, name, img, desc, weather, visit, isList }) => {
  PlanetCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired,
    isList: PropTypes.bool.isRequired,
  };
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <div
        className={`overflow-hidden box-shadow-1 rounded-2xl dark:box-shadow-2 ${
          isList &&
          "border-[1px] border-slate-50 transition duration-300 ease-in-out hover:scale-[1.02]"
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setIsModalOpened(true);
          }}
          className={`flex items-center  ${
            isList
              ? "justify-start gap-12 w-[80vw] h-[5rem] bg-slate-50 bg-opacity-10 italic"
              : "justify-center w-[18rem] h-[10rem] transition duration-500 ease-in-out hover:scale-[1.03]"
          }`}
        >
          <img
            src={img}
            className={`w-[18rem] rounded-2xl ${
              isList
                ? "h-[10rem] rounded-[75px] ml-[-4px]"
                : "absolute h-[10rem]"
            }`}
            alt={name}
          />
          <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">
            {name}
          </p>
        </button>
      </div>
      {isModalOpened && (
        <PlaneteModal
          id={id}
          name={name}
          img={img}
          desc={desc}
          weather={weather}
          visit={visit}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default PlanetCard;
