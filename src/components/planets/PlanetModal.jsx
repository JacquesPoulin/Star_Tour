/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const PlaneteModal = ({
  id,
  name,
  img,
  desc,
  weather,
  visit,
  setIsModalOpened,
}) => {
  PlaneteModal.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired,
    setIsModalOpened: PropTypes.func.isRequired,
  };
  const [info, setInfo] = useState({});

  // Récupération des données de l'API
  const getInfo = () => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.data)
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    // Modale et background blur
    <div className="z-[20] w-[100vw] h-[100vh] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center bg-slate-100 bg-opacity-10 backdrop-blur-[2px]">
      {/* Modale entière */}
      <div className="w-3/5 m-auto bg-black modal-bg bp2:w-5/6 uhd:w-[40%] rounded-xl animate-modalSlideIn">
        {/* Image et titre */}
        <div className="flex flex-col items-center justify-center border-b-[2px] border-black">
          <img
            src={img}
            className="w-full h-[270px] bp2:h-[150px] object-cover z-[1] rounded-t-xl"
            alt="Planet"
          />
          <h1 className="absolute text-6xl bp3:text-4xl text-shadow-2 font-orb text-slate-50 z-[2]">
            {name}
          </h1>
          <button
            type="button"
            onClick={() => {
              setIsModalOpened(false);
            }}
            className="absolute z-10 self-end mr-4 text-5xl text-slate-50 text-shadow-3 font-orb -mt-52 bp2:-mt-20 hover:scale-105"
          >
            X
          </button>
        </div>
        {/* Logo Republique sur fond beige */}
        <div className="z-[3] flex justify-center items-center border-2 border-black rounded-[48px] w-24 h-24 m-auto mt-[-48px] bg-[black]">
          <img
            src="assets/images/republic3.png"
            className="z-[4] w-[100px] h-[82px] mt-[-9.5px]"
            alt="logo de la republique"
          />
        </div>
        {/* Grid de la partie inférieure */}
        <div className="gap-x-20 gap-y-6 p-6 grid bp2:flex bp2:flex-col grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] h-[360px] bp2:h-auto bg-[url('/assets/images/modal_bg.jpg')] -mt-12 bg-cover bg-center rounded-b-xl">
          {/* Description */}
          <div className="col-[1_/_2] row-[1_/_4] rounded-xl box-shadow-2 bg-[url('/assets/images/modal_dark_bg2.jpg')] bg-cover opacity-95">
            <p className="pt-2 pl-6 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] font-thin font-exo text-slate-50 text-shadow-3">
              Description :
            </p>
            <p className="px-6 pt-3 bp2:pt-2 bp2:pb-2 text-lg bp1:text-[1.2vw] bp2:text-[2vw] bp3:text-[3vw] bp1:leading-6 bp2:leading-4 font-thin font-exo text-slate-50">
              {desc}
            </p>
          </div>
          {/* Bouton */}
          <div className="flex justify-center items-center col-[1_/_2] row-[4_/_5] bp2:order-1">
            <Link to="/booking">
              <button
                type="button"
                className="font-medium rounded-md border-2 border-black text-2xl bp1:text-[1.5vw] bp2:text-[2.4vw] bp3:text-[4.2vw] font-exo box-shadow-2 bg-[#679ec2] px-6 hover:scale-[1.01]"
              >
                JE RESERVE MON VOYAGE !
              </button>
            </Link>
          </div>
          {/* Infos */}
          <div className="flex flex-col justify-center items-start col-[2_/_3] row-[1_/_3] rounded-xl box-shadow-2 bg-[url('/assets/images/modal_dark_bg2.jpg')] bg-cover bg-center opacity-95">
            {/* image books */}
            <img
              src="assets/images/books.png"
              alt="Des livres posés sur une étagère"
              className="absolute self-end w-16 h-24 opacity-70"
            />
            {/* Paragraphe infos */}
            <div className="pl-6 font-thin text-slate-50 font-exo">
              <p className="pb-2 text-2xl bp1:text-[2vw] bp2:text-[3vw] bp3:text-[4vw] text-shadow-3 bp2:pt-2">
                Infos pratiques :
              </p>
              <div className="flex items-end justify-start text-lg bp1:text-[1.2vw] bp2:text-[2vw] bp3:text-[3vw] bp2:pb-4 bp2:leading-4">
                <p>
                  Diamètre :{" "}
                  {info.diameter !== "unknown" && info.diameter !== "0"
                    ? info.diameter
                    : "6000"}{" "}
                  km
                  <br />
                  Rotation :{" "}
                  {info.rotation_period !== "unknown"
                    ? info.rotation_period
                    : "24"}{" "}
                  h<br />
                  Orbite :{" "}
                  {info.orbital_period !== "unknown"
                    ? info.orbital_period
                    : "365"}{" "}
                  j<br />
                </p>
                <p className="-ml-7 bp2:ml-4 z-[50]">
                  Population :{" "}
                  {info.population === "unknown"
                    ? "Inconnu"
                    : parseInt(info.population, 10) < 1000000000
                    ? `${parseInt(info.population, 10) / 1000000}M`
                    : `${parseInt(info.population, 10) / 1000000000}MM`}
                  <br />
                  Climat :{" "}
                  {info.climate === "unknown" ? "temperate" : info.climate}
                  <br />
                </p>
              </div>
            </div>
          </div>
          {/* Météo */}
          <div className="col-[2_/_3] row-[3_/_5] rounded-xl box-shadow-2 bg-[url('/assets/images/meteo.png'),url('/assets/images/modal_dark_bg2.jpg')] bg-cover bg-center opacity-95">
            <div className="flex flex-col items-start justify-center pt-2 pl-6 font-thin text-slate-50 font-exo">
              <p className="pb-2 text-xl bp1:text-[1.2vw] bp2:text-[2.8vw] bp3:text-[3.5vw] text-shadow-3">
                Météo / Période de visite conseillée :
              </p>
              <div className="flex items-center justify-center gap-2 pt-1 pl-2 bp3:pt-0 bp1:gap-5">
                <img
                  src={weather}
                  className="w-[72px] bp2:w-[7vw] opacity-90 bp2:pb-2"
                  alt="meteo"
                />
                <p className="text-2xl bp1:text-[1.4vw] bp2:text-[2.2vw] bp3:text-[4vw] italic text-center text-shadow-3">
                  {visit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneteModal;
